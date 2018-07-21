#!/usr/bin/env node
'use strict';

var _todoist = require('./todoist');

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2);

console.log(args[0]);
(0, _todoist.createTask)(args.join(''), "Mañana a las 5pm");