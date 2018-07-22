#!/usr/bin/env node
import { createTask, showTasks } from './todoist'
import { parseTextToTask, checkToken } from './helpers'

checkToken()
const [, , ...args] = process.argv,
  strArg = args.join(' ')

  console.log(args.length)
if(args.length == 0){
  showTasks()
} else {
  createTask(...parseTextToTask(strArg))
}