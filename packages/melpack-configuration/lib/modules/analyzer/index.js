'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpackBundleAnalyzer = require('webpack-bundle-analyzer');

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return function (setup) {
    var configuration = { plugins: [] };

    if (setup.analyzer) {
      configuration.plugins.push(new _webpackBundleAnalyzer.BundleAnalyzerPlugin(options));
      setup.build = (0, _webpackMerge2.default)(setup.build, configuration);
    }

    return setup;
  };
};