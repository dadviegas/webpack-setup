'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configurationGenerator = exports.settingsGenerator = exports.generator = exports.pipe = exports.compose = undefined;

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

var resolvePath = function resolvePath(path) {
  return path.resolve(process.cwd(), path);
};

var settingsGenerator = exports.settingsGenerator = function settingsGenerator() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function () {
    var setup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var environment = setup.environment || 'development';
    var analyzer = setup.analyzer;
    setup = _extends({
      environment: environment,
      isProduction: environment === 'production',
      isTest: environment === 'test',
      isStaging: environment === 'staging',
      isDevelopment: environment === 'development',
      isLocal: environment === 'local',
      paths: {
        contentBase: resolvePath(setup.target || './build'),
        root: resolvePath(),
        source: resolvePath(setup.source || './src'),
        assets: resolvePath(setup.assets || './assets'),
        target: resolvePath(setup.target || './build'),
        nodeModules: _path2.default.join(process.cwd(), 'node_modules')
      },
      analyzer: analyzer,
      optimize: {
        applyVersion: options.optimize ? options.optimize.applyVersion : true,
        applyCommonsChunk: options.optimize ? options.optimize.applyCommonsChunk : true
      },
      devServer: {
        publicPath: options.devServer ? options.devServer.publicPath : '/',
        port: options.devServer ? options.devServer.port : 3000
      }
    }, setup, options, {
      merge: _webpackMerge2.default,
      webpack: _webpack2.default
    });

    setup.build = {};

    return setup;
  };
};

var configurationGenerator = exports.configurationGenerator = function configurationGenerator(composeWebpack) {
  return compose(settingsGenerator(), composeWebpack);
};