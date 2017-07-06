'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _plugins = require('../plugins');

var _plugins2 = _interopRequireDefault(_plugins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function () {
    var setup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var hotReloadModuled = ['react-hot-loader/patch',
    // activate HMR for React
    'webpack-dev-server/client?http://localhost:' + setup.devServer.port,
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack/hot/only-dev-server'
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    ];

    if (!setup.isProduction && !setup.isQA) {
      var hotReload = new setup.webpack.HotModuleReplacementPlugin();
      var namedModuled = new setup.webpack.NamedModulesPlugin();

      var entry = {};
      Object.keys(setup.build.entry).forEach(function (key) {
        if (key === 'vendor') {
          entry[key] = setup.build.entry[key];
        } else {
          entry[key] = hotReloadModuled.concat(setup.build.entry[key]);
        }
      });

      setup.build.entry = entry;

      (0, _plugins2.default)([hotReload, namedModuled])(setup);
    }

    return setup;
  };
};