'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

exports.default = function (options) {
  return (0, _helpers.generator)({
    entry: options || {
      index: ['./index.js']
    }
  });
};