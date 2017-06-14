'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _plugins = require('../plugins');

var _plugins2 = _interopRequireDefault(_plugins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getReleaseFlags = function getReleaseFlags() {
  var releaseFlags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var data = {};
  Object.keys(releaseFlags).forEach(function (key) {
    if (typeof releaseFlags[key] === 'string') {
      data[key] = JSON.stringify(releaseFlags[key]);
    } else {
      data[key] = releaseFlags[key];
    }
  });

  return data;
};

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function () {
    var setup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var environment = new setup.webpack.EnvironmentPlugin({
      NODE_ENV: setup.environment,
      DEBUG: !setup.isProduction
    });

    var releaseFlags = new setup.webpack.DefinePlugin(_extends({}, getReleaseFlags(_extends({
      RF_ENVIRONMENT: setup.environment
    }, options))));

    (0, _plugins2.default)([environment, releaseFlags])(setup);
    return setup;
  };
};