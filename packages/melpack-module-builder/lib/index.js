'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compiler = exports.setup = exports.plugins = exports.module = exports.configurationGenerator = exports.optimize = exports.stats = exports.babel = exports.define = exports.resolve = exports.output = exports.entry = exports.base = exports.compose = exports.pipe = undefined;

var _melpackConfiguration = require('melpack-configuration');

var confArray = [(0, _melpackConfiguration.analyzer)(), (0, _melpackConfiguration.base)(), (0, _melpackConfiguration.entry)(), (0, _melpackConfiguration.output)(), (0, _melpackConfiguration.resolve)(), (0, _melpackConfiguration.babel)(), (0, _melpackConfiguration.stats)(), (0, _melpackConfiguration.optimize)()];

var setup = {
  init: function init() {},
  add: function add() {
    for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
      elements[_key] = arguments[_key];
    }

    return Array.prototype.push.apply(confArray, elements);
  },
  build: function build(setup) {
    return (0, _melpackConfiguration.configurationGenerator)(_melpackConfiguration.pipe.apply(_melpackConfiguration.pipe, confArray))(setup);
  }
};

exports.pipe = _melpackConfiguration.pipe;
exports.compose = _melpackConfiguration.compose;
exports.base = _melpackConfiguration.base;
exports.entry = _melpackConfiguration.entry;
exports.output = _melpackConfiguration.output;
exports.resolve = _melpackConfiguration.resolve;
exports.define = _melpackConfiguration.define;
exports.babel = _melpackConfiguration.babel;
exports.stats = _melpackConfiguration.stats;
exports.optimize = _melpackConfiguration.optimize;
exports.configurationGenerator = _melpackConfiguration.configurationGenerator;
exports.module = _melpackConfiguration.module;
exports.plugins = _melpackConfiguration.plugins;
exports.setup = setup;
exports.compiler = _melpackConfiguration.compiler;