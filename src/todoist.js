import request from 'request'
import uuid from 'uuid/v1'
import config from './config'
import { getCurrentFolderName } from './helpers'
import chalk from 'chalk'

const currentFolderName = getCurrentFolderName(
  process.cwd(),
  process.env['HOME']
)

const tasksEndPoint = `${config.api_base}/tasks`,
  projectsEndPoint = `${config.api_base}/projects`

export const showTasks = async project_id => {
  request(
    await showTaskEndPoint(project_id),
    { headers: headers(), json: true },
    (error, respoense, body) => {
      body.map(task => {
        console.log(chalk.blue(task.content))
      })
    }
  )
}
const showTaskEndPoint = async () => {
  const project_id =
    (await getProjectIdByName(currentFolderName)) ||
    (await getProjectIdByName('Inbox'))
  return tasksEndPoint + '?project_id=' + project_id
}

export const createTask = async (content, due_string) => {
  const body = {
    content,
    due_string,
    due_lang: 'es',
    // priority,
    project_id: await getProjectId(currentFolderName)
  }

  request(
    {
      url: tasksEndPoint,
      method: 'POST',
      headers: headers(),
      json: body
    },
    (error, response, body) => {
      const msg = response.statusCode == 200 ? '✔ Task Created' : body
      console.log(chalk.greenBright(msg))
    }
  )
}

const headers = () => {
  return {
    Authorization: `Bearer ${process.env['TODOIST_TOKEN']}`,
    'Content-Type': 'application/json',
    'X-Request-Id': uuid()
  }
}

const getProjectId = async name => {
  const id = (await getProjectIdByName(name)) || createProject(name)
  return id
}

const getProjectIdByName = name => {
  return new Promise(resolve => {
    request(
      projectsEndPoint,
      { headers: headers(), json: true },
      (error, response, body) => {
        const project = body.find(project => project.name == name)
        resolve((project && project.id) || undefined)
      }
    )
  })
}

const createProject = name =>
  new Promise(resolve => {
    request(
      {
        url: projectsEndPoint,
        method: 'POST',
        headers: headers(),
        json: { name }
      },
      (error, response, body) => {
        resolve(body.id)
      }
    )
  })
