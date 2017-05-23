'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackChunkHash = require('webpack-chunk-hash');

var _webpackChunkHash2 = _interopRequireDefault(_webpackChunkHash);

var _chunkManifestWebpack2Plugin = require('chunk-manifest-webpack2-plugin');

var _chunkManifestWebpack2Plugin2 = _interopRequireDefault(_chunkManifestWebpack2Plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fileNameGeneratePattern = function fileNameGeneratePattern(options) {
  return options.isDevelopment ? '[name].js' : '[name].[chunkhash].js';
};

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function () {
    var setup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var configuration = {
      plugins: [new _webpack2.default.NoEmitOnErrorsPlugin()]
    };

    if (setup.isProduction || setup.isQA) {
      configuration.plugins.push(new _webpack2.default.optimize.UglifyJsPlugin({
        compress: {
          unused: true, // Enables tree shaking
          dead_code: true, // Enables tree shaking
          pure_getters: true,
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          comparisons: true,
          sequences: true,
          evaluate: true,
          join_vars: true,
          if_return: true
        },
        output: {
          comments: false
        },
        sourceMap: true
      }), new _webpack2.default.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        options: {
          context: process.cwd()
        }
      }));

      if (setup.optimize.applyVersion) {
        configuration.plugins.unshift([new _webpack2.default.optimize.CommonsChunkPlugin({
          name: setup.applyManifest ? ['vendor', 'manifest'] : ['vendor'],
          minChunks: Infinity
        }), new _webpack2.default.HashedModuleIdsPlugin(), new _webpackChunkHash2.default(), new _chunkManifestWebpack2Plugin2.default({
          filename: 'chunk-manifest.json',
          manifestVariable: 'webpackManifest'
        })]);

        setup.build.output = _extends({}, setup.build.output, {
          filename: fileNameGeneratePattern(setup),
          chunkFilename: fileNameGeneratePattern(setup)
        });
      }

      if (setup.optimize.applyCommonsChunk) {
        configuration.plugins.push([new _webpack2.default.optimize.CommonsChunkPlugin({
          name: 'commons',
          filename: 'commons.[chunkhash].js',
          minChunks: 3
        })]);
      }

      setup.build = (0, _webpackMerge2.default)(setup.build, configuration);
    }

    return setup;
  };
};