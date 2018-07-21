#!/usr/bin/env node
import { createTask } from './todoist'
import { parseTextToTask, checkToken } from './helpers'

checkToken()
const [, , ...args] = process.argv,
  strArg = args.join(' ')

createTask(...parseTextToTask(strArg))