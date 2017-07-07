"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (options) {
  return function (setup) {
    var configuration = _extends({
      module: { rules: [] }
    }, options);

    setup.build = setup.merge(setup.build, configuration);
    return setup;
  };
};