#!/usr/bin/env node
import { createTask, showTasks } from './todoist'
import { parseTextToTask, checkToken, isEmpty } from './helpers'

checkToken()
const [, , ...args] = process.argv,
  strArg = args.join(' ')

if(isEmpty(args)){
  showTasks()
} else {
  createTask(...parseTextToTask(strArg))
}