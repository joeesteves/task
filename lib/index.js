#!/usr/bin/env node
'use strict';

var _todoist = require('./todoist');

var _helpers = require('./helpers');

(0, _helpers.checkToken)();
const [,, ...args] = process.argv,
      strArg = args.join(' ');

console.log(args.length);
if (args.length == 0) {
  (0, _todoist.showTasks)();
} else {
  (0, _todoist.createTask)(...(0, _helpers.parseTextToTask)(strArg));
}