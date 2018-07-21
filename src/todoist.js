import request from 'request'
import uuid from 'uuid/v1'

const endPoint = 'https://beta.todoist.com/API/v8/tasks',
  headers = {
    Authorization: `Bearer ${process.env['TODOIST_TOKEN']}`,
    'Content-Type': 'application/json',
    'X-Request-Id': uuid()
  }

export const createTask = (content, due_string, priority = 4) => {
  const body = {
    content,
    due_string,
    due_lang: 'es',
    priority
  }
  request(
    {
      url: endPoint,
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
