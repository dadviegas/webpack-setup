'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpackConfiguration = require('webpack-configuration');

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function () {
    var setup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0, _webpackConfiguration.module)({
      module: {
        rules: [{
          test: /\.(css|scss|sass)$/,
          loader: 'style!css!sass'
        }]
      }
    })(setup);

    return setup;
  };
};