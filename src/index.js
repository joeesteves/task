#!/usr/bin/env node
import { createTask } from './todoist'
import { parseTextToTask } from './helpers'

const [, , ...args] = process.argv,
  strArg = args.join(' ')

createTask(...parseTextToTask(strArg))