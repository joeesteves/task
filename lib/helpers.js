'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var parseTextToTask = exports.parseTextToTask = function parseTextToTask(str) {
  return str.split(' -d ');
};

var getCurrentFolderName = exports.getCurrentFolderName = function getCurrentFolderName(cwd, home) {
  if (cwd != home) return cwd.split('/').splice(-1)[0];
};