'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _karma = require('karma');

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options, webpackConf) {
  delete webpackConf.entry;
  delete webpackConf.output;
  webpackConf.devtool = 'inline-source-map';

  _gulp2.default.task('test', function (done) {
    return new _karma.Server({
      webpack: webpackConf,
      files: ['tests/**/*.js'],
      preprocessors: {
        // 'src/**/*.js': ['sourcemap', 'webpack'],
        'tests/**/*.js': ['sourcemap', 'webpack']
      },
      basePath: '.',
      frameworks: ['jasmine'],
      reporters: ['spec'],
      specReporter: {
        maxLogLines: 5, // limit number of lines logged per test
        suppressErrorSummary: false, // do not print error summary
        suppressFailed: false, // do not print information about failed tests
        suppressPassed: true, // do not print information about passed tests
        suppressSkipped: false, // do not print information about skipped tests
        showSpecTiming: true, // print the time elapsed for each spec
        failFast: false // test would finish with error when a first fail occurs.
      },
      browsers: ['PhantomJS'], // jsdom PhantomJS Chrome
      autoWatch: options.watch,
      singleRun: !options.watch,
      webpackMiddleware: {
        stats: {
          colors: true
        }
      }
    }, function (exitCode) {
      done();
      process.exit(exitCode);
    }).start();
  });

  _gulp2.default.start('test');
};