'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compiler = exports.setup = exports.plugins = exports.module = exports.configurationGenerator = exports.optimize = exports.stats = exports.babel = exports.define = exports.resolve = exports.output = exports.entry = exports.base = exports.compose = exports.pipe = undefined;

var _webpackConfiguration = require('webpack-configuration');

var confArray = [(0, _webpackConfiguration.analyzer)(), (0, _webpackConfiguration.base)(), (0, _webpackConfiguration.entry)(), (0, _webpackConfiguration.output)(), (0, _webpackConfiguration.resolve)(), (0, _webpackConfiguration.babel)(), (0, _webpackConfiguration.stats)(), (0, _webpackConfiguration.optimize)()];

var setup = {
  init: function init() {},
  add: function add() {
    for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
      elements[_key] = arguments[_key];
    }

    return Array.prototype.push.apply(confArray, elements);
  },
  build: function build(setup) {
    return (0, _webpackConfiguration.configurationGenerator)(_webpackConfiguration.pipe.apply(_webpackConfiguration.pipe, confArray))(setup);
  }
};

exports.pipe = _webpackConfiguration.pipe;
exports.compose = _webpackConfiguration.compose;
exports.base = _webpackConfiguration.base;
exports.entry = _webpackConfiguration.entry;
exports.output = _webpackConfiguration.output;
exports.resolve = _webpackConfiguration.resolve;
exports.define = _webpackConfiguration.define;
exports.babel = _webpackConfiguration.babel;
exports.stats = _webpackConfiguration.stats;
exports.optimize = _webpackConfiguration.optimize;
exports.configurationGenerator = _webpackConfiguration.configurationGenerator;
exports.module = _webpackConfiguration.module;
exports.plugins = _webpackConfiguration.plugins;
exports.setup = setup;
exports.compiler = _webpackConfiguration.compiler;