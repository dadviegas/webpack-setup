'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DashboardPlugin = require('webpack-dashboard/plugin');

exports.default = function (options) {
  return function (setup) {
    var configuration = { plugins: [] };

    configuration.plugins.push(new DashboardPlugin());
    setup.build = setup.merge(setup.build, configuration);

    return setup;
  };
};