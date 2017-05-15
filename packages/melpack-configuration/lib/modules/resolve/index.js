'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function () {
    var setup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var configuration = {
      resolve: {
        symlinks: true,
        alias: {
          source: setup.paths.source,
          assets: setup.paths.assets
        },
        modules: [setup.paths.nodeModules, setup.paths.source, '.'],
        extensions: ['.js', '.jsx', '.json', '.css', '.sass', '.scss', '.html'],
        unsafeCache: true
      }
    };

    setup.build = (0, _webpackMerge2.default)(setup.build, configuration, { resolve: options });
    return setup;
  };
};