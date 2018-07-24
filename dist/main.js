"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _motorcortex = require("@kissmybutton/motorcortex");

var _motorcortex2 = _interopRequireDefault(_motorcortex);

var _Flubber = require("./Flubber");

var _Flubber2 = _interopRequireDefault(_Flubber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  npm_name: "@kissmybutton/motorcortex-flubber",
  incidents: [{
    exportable: _Flubber2.default
  }],
  channel: _motorcortex2.default.Channel
};