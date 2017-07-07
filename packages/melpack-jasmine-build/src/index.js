import {Server} from 'karma'
import gulp from 'gulp'

export default (options, webpackConf) => {
  delete webpackConf.entry
  // delete webpackConf.output
  webpackConf.devtool = 'eval'

  gulp.task('test', function (done) {
    return new Server({
      webpack: webpackConf,
      files: [
        'tests/**/*.spec.js'
      ],
      preprocessors: {
        // 'src/**/*.js': ['sourcemap', 'webpack'],
        'tests/**/*.spec.js': ['sourcemap', 'webpack']
      },
      basePath: '.',
      frameworks: ['jasmine'],
      reporters: [
        'spec'
      ],
      specReporter: {
        maxLogLines: 5,             // limit number of lines logged per test
        suppressErrorSummary: false, // do not print error summary
        suppressFailed: false,      // do not print information about failed tests
        suppressPassed: true,      // do not print information about passed tests
        suppressSkipped: false,      // do not print information about skipped tests
        showSpecTiming: true,      // print the time elapsed for each spec
        failFast: false              // test would finish with error when a first fail occurs.
      },
      browsers: ['PhantomJS'], // jsdom PhantomJS Chrome
      autoWatch: options.watch,
      singleRun: !options.watch,
      webpackMiddleware: {
        stats: {
          colors: true
        }
      }
    }, (exitCode) => {
      done()
      process.exit(exitCode)
    }).start()
  })

  gulp.start('test')
}
