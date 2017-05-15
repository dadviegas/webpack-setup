'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return function () {
    var setup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var configuration = _extends({
      // Add asset Information
      assets: true,
      // Sort assets by a field
      assetsSort: 'field',
      // Add information about cached (not built) modules
      cached: true,
      // Show cached assets (setting this to `false` only shows emitted files)
      cachedAssets: false,
      // Add children information
      children: false,
      // Add chunk information (setting this to `false` allows for a less verbose output)
      chunks: true,
      // Add built modules information to chunk information
      chunkModules: true,
      // Add the origins of chunks and chunk merging info
      chunkOrigins: true,
      // Sort the chunks by a field
      chunksSort: 'field',
      // Context directory for request shortening
      context: setup.paths.source,
      // `webpack --colors` equivalent
      colors: true,
      // Display the distance from the entry point for each module
      depth: false,
      // Display the entry points with the corresponding bundles
      entrypoints: true,
      // Add errors
      errors: true,
      // Add details to errors (like resolving log)
      errorDetails: true,
      // Exclude modules which match one of the given strings or regular expressions
      exclude: [/node_modules[\\]react/],
      // Add the hash of the compilation
      hash: true,
      // Set the maximum number of modules to be shown
      maxModules: 15,
      // Add built modules information
      modules: true,
      // Sort the modules by a field
      modulesSort: 'field',
      // Show performance hint when file size exceeds `performance.maxAssetSize`
      performance: true,
      // Show the exports of the modules
      providedExports: true,
      // Add public path information
      publicPath: true,
      // Add information about the reasons why modules are included
      reasons: true,
      // Add the source code of modules
      source: true,
      // Add timing information
      timings: true,
      // Show which exports of a module are used
      usedExports: true,
      // Add webpack version information
      version: true,
      // Add warnings
      warnings: true
    }, options);

    setup.build = (0, _webpackMerge2.default)(setup.build, { stats: configuration });
    return setup;
  };
};