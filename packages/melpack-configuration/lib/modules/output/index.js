'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function () {
    var setup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var configuration = {
      output: _extends({
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        libraryTarget: 'umd',
        path: setup.paths.target,
        publicPath: setup.target
      }, options)
    };

    setup.build = (0, _webpackMerge2.default)(setup.build, configuration);
    return setup;
  };
};