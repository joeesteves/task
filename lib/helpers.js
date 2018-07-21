'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const parseTextToTask = exports.parseTextToTask = str => str.split(' -d ');

const getCurrentFolderName = exports.getCurrentFolderName = (cwd, home) => {
  if (cwd != home) return cwd.split('/').splice(-1)[0];
};

const checkToken = exports.checkToken = () => {
  if (!process.env["TODOIST_TOKEN"]) {
    console.log("TODOIST_TOKEN environment variable is missing");
    process.exit(1);
  }
};