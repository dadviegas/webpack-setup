'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style = exports.html = exports.setup = exports.plugins = exports.module = exports.optimize = exports.babel = exports.define = exports.resolve = exports.output = exports.entry = exports.base = exports.compose = exports.pipe = exports.analyzer = undefined;

var _melpackConfiguration = require('melpack-configuration');

var _html = require('./modules/html');

var _html2 = _interopRequireDefault(_html);

var _style = require('./modules/style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_melpackConfiguration.setup.add((0, _melpackConfiguration.base)(), (0, _melpackConfiguration.entry)(), (0, _melpackConfiguration.output)(), (0, _melpackConfiguration.resolve)(), (0, _melpackConfiguration.babel)(), (0, _melpackConfiguration.stats)(), (0, _melpackConfiguration.optimize)());

exports.analyzer = _melpackConfiguration.analyzer;
exports.pipe = _melpackConfiguration.pipe;
exports.compose = _melpackConfiguration.compose;
exports.base = _melpackConfiguration.base;
exports.entry = _melpackConfiguration.entry;
exports.output = _melpackConfiguration.output;
exports.resolve = _melpackConfiguration.resolve;
exports.define = _melpackConfiguration.define;
exports.babel = _melpackConfiguration.babel;
exports.optimize = _melpackConfiguration.optimize;
exports.module = _melpackConfiguration.module;
exports.plugins = _melpackConfiguration.plugins;
exports.setup = _melpackConfiguration.setup;
exports.html = _html2.default;
exports.style = _style2.default;