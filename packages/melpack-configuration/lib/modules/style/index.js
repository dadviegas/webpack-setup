'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _melpackConfiguration = require('melpack-configuration');

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function () {
    var setup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0, _melpackConfiguration.module)({
      module: {
        rules: [{
          test: /\.scss$/,
          use: [{
            loader: 'style-loader' // creates style nodes from JS strings
          }, {
            loader: 'css-loader' // translates CSS into CommonJS
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }]
        }]
      }
    })(setup);

    return setup;
  };
};