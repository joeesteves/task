#!/usr/bin/env node
'use strict';

var _todoist = require('./todoist');

var _helpers = require('./helpers');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2),
    strArg = args.join(' ');

_todoist.createTask.apply(undefined, _toConsumableArray((0, _helpers.parseTextToTask)(strArg)));