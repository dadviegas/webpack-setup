'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboard = exports.webpack = exports.stats = exports.babel = exports.define = exports.resolve = exports.module = exports.output = exports.entry = exports.base = exports.plugins = exports.optimize = exports.analyzer = exports.compose = exports.pipe = exports.setup = undefined;

var _helpers = require('./modules/helpers');

var _entry = require('./modules/entry');

var _entry2 = _interopRequireDefault(_entry);

var _output = require('./modules/output');

var _output2 = _interopRequireDefault(_output);

var _resolve = require('./modules/resolve');

var _resolve2 = _interopRequireDefault(_resolve);

var _module2 = require('./modules/module');

var _module3 = _interopRequireDefault(_module2);

var _define = require('./modules/define');

var _define2 = _interopRequireDefault(_define);

var _base = require('./modules/base');

var _base2 = _interopRequireDefault(_base);

var _dashboard = require('./modules/dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _babel = require('./modules/babel');

var _babel2 = _interopRequireDefault(_babel);

var _stats = require('./modules/stats');

var _stats2 = _interopRequireDefault(_stats);

var _optimize = require('./modules/optimize');

var _optimize2 = _interopRequireDefault(_optimize);

var _analyzer = require('./modules/analyzer');

var _analyzer2 = _interopRequireDefault(_analyzer);

var _plugins = require('./modules/plugins');

var _plugins2 = _interopRequireDefault(_plugins);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var confArray = [];
var generateConfiguration = function generateConfiguration(setup) {
  return (0, _helpers.configurationGenerator)(_helpers.pipe.apply(_helpers.pipe, confArray))(setup);
};
var getConfiguration = function getConfiguration(setup) {
  return generateConfiguration(setup).build;
};
var addConfiguration = function addConfiguration() {
  for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
    elements[_key] = arguments[_key];
  }

  return Array.prototype.push.apply(confArray, elements);
};

var compiler = function compiler(setup) {
  var webpackConf = generateConfiguration(setup);
  return (0, _webpack2.default)(webpackConf.build, function (err, result) {
    if (err) {
      throw new _gulpUtil2.default.PluginError('webpack:build', err);
    }
    _gulpUtil2.default.log('[webpack:build]', result.toString(webpackConf.build.stats));
  });
};

var server = function server(setup) {
  var webpackConf = generateConfiguration(setup);

  var url = 'http://localhost:' + webpackConf.build.devServer.port;

  webpackConf.build.entry.index.unshift('react-hot-loader/patch', 'webpack-dev-server/client?/' + url, 'webpack/hot/dev-server');

  var wpCompiler = compiler(webpackConf.build);
  new _webpackDevServer2.default(wpCompiler, webpackConf.build.devServer).listen(webpackConf.build.devServer.port, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at ' + url);
  });
};

var setup = {
  init: function init() {},
  add: addConfiguration,
  resolve: getConfiguration,
  server: server,
  compiler: compiler
};

exports.setup = setup;
exports.pipe = _helpers.pipe;
exports.compose = _helpers.compose;
exports.analyzer = _analyzer2.default;
exports.optimize = _optimize2.default;
exports.plugins = _plugins2.default;
exports.base = _base2.default;
exports.entry = _entry2.default;
exports.output = _output2.default;
exports.module = _module3.default;
exports.resolve = _resolve2.default;
exports.define = _define2.default;
exports.babel = _babel2.default;
exports.stats = _stats2.default;
exports.webpack = _webpack2.default;
exports.dashboard = _dashboard2.default;