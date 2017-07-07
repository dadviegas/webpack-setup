'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpackBundleAnalyzer = require('webpack-bundle-analyzer');

exports.default = function (options) {
  return function (setup) {
    var configuration = { plugins: [] };

    if (setup.analyzer) {
      configuration.plugins.push(new _webpackBundleAnalyzer.BundleAnalyzerPlugin(options));
      setup.build = setup.merge(setup.build, configuration);
    }

    return setup;
  };
};