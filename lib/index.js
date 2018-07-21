#!/usr/bin/env node
'use strict';

var _todoist = require('./todoist');

var _helpers = require('./helpers');

(0, _helpers.checkToken)();
const [,, ...args] = process.argv,
      strArg = args.join(' ');

(0, _todoist.createTask)(...(0, _helpers.parseTextToTask)(strArg));