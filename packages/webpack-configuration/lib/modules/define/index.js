'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _plugins = require('../plugins');

var _plugins2 = _interopRequireDefault(_plugins);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

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

    var releaseFlags = {};
    var environment = (0, _plugins2.default)(new _webpack2.default.EnvironmentPlugin({
      NODE_ENV: setup.environment,
      DEBUG: setup.isStaging || setup.isDevelopment || setup.isLocal
    }));

    if (options !== {}) {
      releaseFlags = (0, _plugins2.default)(new _webpack2.default.DefinePlugin(_extends({}, getReleaseFlags(_extends({
        RF_ENVIRONMENT: setup.environment
      }, options)))));
    }

    environment(setup);
    releaseFlags(setup);

    return setup;
  };
};