import request from 'request'
import uuid from 'uuid/v1'
import config from './config'
import { getCurrentFolderName } from './helpers'

const tasksEndPoint = `${config.api_base}/tasks`,
  projectsEndPoint = `${config.api_base}/projects`

const headers = () => {
  return {
    Authorization: `Bearer ${process.env['TODOIST_TOKEN']}`,
    'Content-Type': 'application/json',
    'X-Request-Id': uuid()
  }
}

export const createTask = async (content, due_string) => {
  const body = {
    content,
    due_string,
    due_lang: 'es',
    // priority,
    project_id: await getProjectId(
      getCurrentFolderName(process.cwd(), process.env['HOME'])
    )
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
      console.log(msg)
    }
  )
}

const getProjectId = async name => {
  return (await getProjectIdByName(name)) || createProject(name)
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
