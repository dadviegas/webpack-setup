'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _module2 = require('../module');

var _module3 = _interopRequireDefault(_module2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function () {
    var setup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var babelUse = {
      options: {
        presets: ['env', 'es2015', 'stage-2', 'react']
      }
    };

    if (setup.isDevelopment) {
      babelUse.options.plugins = ['react-hot-loader/babel'];
    }

    (0, _module3.default)({
      module: {
        rules: [_extends({
          test: /\.js$/,
          exclude: /node_modules/,
          include: setup.paths.source,
          use: _extends({
            loader: 'babel-loader'
          }, babelUse)
        }, options)]
      }
    })(setup);

    return setup;
  };
};