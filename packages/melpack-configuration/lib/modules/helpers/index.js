'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = exports.generator = exports.pipe = exports.compose = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compose = exports.compose = function compose(f, g) {
  return function () {
    return g(f.apply(undefined, arguments));
  };
};
var pipe = exports.pipe = function pipe() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduce(compose);
};

var generator = exports.generator = function generator() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function () {
    var setup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    setup.build = (0, _webpackMerge2.default)(setup.build, options);
    return setup;
  };
};

var setup = exports.setup = function setup() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function () {
    var setup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var environment = setup.environment || 'development';
    setup = _extends({
      environment: environment,
      isProduction: environment === 'production',
      isTest: environment === 'test',
      isStaging: environment === 'staging',
      isDevelopment: environment === 'development',
      isLocal: environment === 'local',
      paths: {
        contentBase: _path2.default.resolve(process.cwd(), './dist'),
        root: _path2.default.resolve(process.cwd()),
        source: _path2.default.resolve(process.cwd(), setup.source || './src'),
        assets: _path2.default.resolve(process.cwd(), setup.assets || './assets'),
        target: _path2.default.resolve(process.cwd(), setup.target || './lib'),
        nodeModules: _path2.default.join(process.cwd(), 'node_modules')
      },
      optimize: {
        applyVersion: setup.optimize ? setup.optimize.applyVersion : false,
        applyCommonsChunk: setup.optimize ? setup.optimize.applyCommonsChunk : false
      },
      analyzer: setup.analyzer
    }, setup, options, {
      merge: _webpackMerge2.default,
      webpack: _webpack2.default
    });

    setup.build = {};

    return setup;
  };
};