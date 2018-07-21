import request from 'request'
import uuid from 'uuid/v1'
import config from './config'
import { getCurrentFolderName } from './helpers'

const tasksEndPoint = `${config.api_base}/tasks`,
  projectsEndPoint = `${config.api_base}/projects`,
  headers = {
    Authorization: `Bearer ${process.env['TODOIST_TOKEN']}`,
    'Content-Type': 'application/json',
    'X-Request-Id': uuid()
  }

export const createTask = async (content, due_string, priority = 4) => {
  const body = {
    content,
    due_string,
    due_lang: 'es',
    priority,
    project_id: await getProjectId(
      getCurrentFolderName(process.cwd(), process.env['HOME'])
    )
  }

  request(
    {
      url: tasksEndPoint,
      method: 'POST',
      headers,
      json: body
    },
    (error, response, body) => {
      const msg = response.statusCode == 200 ? '✔ Task Created' : body
      console.log(msg)
    }
  )
}
export const getProjectId = name => {
  return new Promise(resolve => {
    request(
      projectsEndPoint,
      { headers: { Authorization: `Bearer ${process.env['TODOIST_TOKEN']}` } },
      (error, response, body) => {
        const project = JSON.parse(body).find(project => project.name == name)
        resolve((project && project.id) || undefined)
      }
    )
  })
}
