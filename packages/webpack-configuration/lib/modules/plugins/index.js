'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (options) {
  return function (setup) {
    var configuration = void 0;
    if (options instanceof Array) {
      configuration = {
        plugins: [].concat(_toConsumableArray(options))
      };
    } else {
      configuration = {
        plugins: [options]
      };
    }

    setup.build = (0, _webpackMerge2.default)(setup.build, configuration);
    return setup;
  };
};