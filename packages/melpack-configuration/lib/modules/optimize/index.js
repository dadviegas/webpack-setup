'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _plugins = require('../plugins');

var _plugins2 = _interopRequireDefault(_plugins);

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

    (0, _plugins2.default)(new setup.webpack.NoEmitOnErrorsPlugin())(setup);

    if (setup.isProduction || setup.isQA) {
      (0, _plugins2.default)([new setup.webpack.optimize.UglifyJsPlugin({
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
      }), new setup.webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        options: {
          context: process.cwd()
        }
      })])(setup);

      if (setup.optimize.applyVersion) {
        (0, _plugins2.default)([new setup.webpack.optimize.CommonsChunkPlugin({
          name: ['vendor', 'manifest'],
          minChunks: Infinity
        }), new setup.webpack.HashedModuleIdsPlugin(), new _webpackChunkHash2.default(), new _chunkManifestWebpack2Plugin2.default({
          filename: 'manifest.json',
          manifestVariable: 'webpackManifest',
          inlineManifest: false
        })])(setup);

        setup.build.output = _extends({}, setup.build.output, {
          filename: fileNameGeneratePattern(setup),
          chunkFilename: fileNameGeneratePattern(setup)
        });
      }

      if (setup.optimize.applyCommonsChunk) {
        (0, _plugins2.default)([new setup.webpack.optimize.CommonsChunkPlugin({
          name: 'commons',
          filename: 'commons.[chunkhash].js',
          minChunks: 3
        })])(setup);
      }
    }

    return setup;
  };
};