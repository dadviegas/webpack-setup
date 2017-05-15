'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compiler = exports.configurationGenerator = exports.webpack = exports.stats = exports.babel = exports.define = exports.resolve = exports.module = exports.output = exports.entry = exports.base = exports.plugins = exports.optimize = exports.analyzer = exports.compose = exports.pipe = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enviromnentSetup = (0, _helpers.setup)();

var configurationGenerator = function configurationGenerator(composeWebpack) {
  return (0, _helpers.compose)(enviromnentSetup, composeWebpack);
};

var compiler = function compiler(setup) {
  return (0, _webpack2.default)(setup, function (err, result) {
    if (err) {
      throw new _gulpUtil2.default.PluginError('webpack:build', err);
    }
    _gulpUtil2.default.log('[webpack:build]', result.toString(setup.stats));
  });
};

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
exports.configurationGenerator = configurationGenerator;
exports.compiler = compiler;