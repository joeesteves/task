#!/usr/bin/env node
import { createTask } from './todoist'
const [, , ...args] = process.argv

console.log(args[0])
createTask(args.join(''), "Mañana a las 5pm")