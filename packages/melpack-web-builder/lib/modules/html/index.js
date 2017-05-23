'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _htmlWebpackPlugin = require('html-webpack-plugin');

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return function (setup) {
    var _options$template = options.template,
        template = _options$template === undefined ? 'template.html' : _options$template,
        _options$title = options.title,
        title = _options$title === undefined ? '' : _options$title,
        _options$filename = options.filename,
        filename = _options$filename === undefined ? './index.html' : _options$filename,
        chunks = options.chunks,
        _options$commonChunks = options.commonChunks,
        commonChunks = _options$commonChunks === undefined ? ['vendor', 'manifest', 'commons'] : _options$commonChunks;


    var chunksToApply = void 0;

    if (chunks instanceof String) {
      chunksToApply = commonChunks.push(chunks);
    }

    if (chunks instanceof Array) {
      chunksToApply = commonChunks.concat(chunks);
    }

    if (chunksToApply) {
      var page = {
        title: title,
        filename: filename,
        template: _path2.default.resolve(process.cwd(), template),
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        },
        chunks: chunksToApply
      };

      if (setup.isLocal || setup.isDevelopment || setup.isStaging) {
        delete page.minify;
      }

      var htmlPage = new _htmlWebpackPlugin2.default(page);

      setup.build = setup.merge(setup.build, {
        plugins: [htmlPage]
      });
    }

    return setup;
  };
};