'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTask = undefined;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _v = require('uuid/v1');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var endPoint = 'https://beta.todoist.com/API/v8/tasks',
    headers = {
  Authorization: 'Bearer ' + process.env["TODOIST_TOKEN"],
  'Content-Type': 'application/json',
  'X-Request-Id': (0, _v2.default)()
};

var createTask = exports.createTask = function createTask(content, due_string) {
  var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;

  var body = {
    content: content,
    due_string: due_string,
    due_lang: 'es',
    priority: priority
  };
  (0, _request2.default)({
    url: endPoint,
    method: 'POST',
    headers: headers,
    json: body
  }, function (error, response, body) {
    console.log(error);
    console.log(response);
    console.log(body);
  });
};