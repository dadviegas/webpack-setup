'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  return function () {
    var setup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // read more on https://webpack.js.org/configuration/stats/
    // options could be an object or string
    setup.build = setup.merge(setup.build, { stats: options || 'normal' });
    return setup;
  };
};