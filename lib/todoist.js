'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProjectId = exports.createTask = undefined;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _v = require('uuid/v1');

var _v2 = _interopRequireDefault(_v);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const tasksEndPoint = `${_config2.default.api_base}/tasks`,
      projectsEndPoint = `${_config2.default.api_base}/projects`,
      headers = {
  Authorization: `Bearer ${process.env['TODOIST_TOKEN']}`,
  'Content-Type': 'application/json',
  'X-Request-Id': (0, _v2.default)()
};

const createTask = exports.createTask = (() => {
  var _ref = _asyncToGenerator(function* (content, due_string, priority = 4) {
    const body = {
      content,
      due_string,
      due_lang: 'es',
      priority,
      project_id: yield getProjectId((0, _helpers.getCurrentFolderName)(process.cwd(), process.env['HOME']))
    };

    (0, _request2.default)({
      url: tasksEndPoint,
      method: 'POST',
      headers,
      json: body
    }, function (error, response, body) {
      const msg = response.statusCode == 200 ? '✔ Task Created' : body;
      console.log(msg);
    });
  });

  return function createTask(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();
const getProjectId = exports.getProjectId = name => {
  return new Promise(resolve => {
    (0, _request2.default)(projectsEndPoint, { headers: { Authorization: `Bearer ${process.env['TODOIST_TOKEN']}` } }, (error, response, body) => {
      const project = JSON.parse(body).find(project => project.name == name);
      resolve(project && project.id || undefined);
    });
  });
};