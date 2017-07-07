'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

    setup.build = setup.merge(setup.build, configuration, { resolve: options });
    return setup;
  };
};