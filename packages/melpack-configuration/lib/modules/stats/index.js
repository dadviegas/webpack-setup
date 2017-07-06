'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return function () {
    var setup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // read more on https://webpack.js.org/configuration/stats/
    // options could be an object or string
    setup.build = (0, _webpackMerge2.default)(setup.build, { stats: options || 'normal' });
    return setup;
  };
};