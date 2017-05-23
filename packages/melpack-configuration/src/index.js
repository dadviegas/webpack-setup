import {pipe, compose, configurationGenerator} from './modules/helpers'
import entry from './modules/entry'
import output from './modules/output'
import resolve from './modules/resolve'
import module from './modules/module'
import define from './modules/define'
import base from './modules/base'
import dashboard from './modules/dashboard'
import babel from './modules/babel'
import stats from './modules/stats'
import optimize from './modules/optimize'
import analyzer from './modules/analyzer'
import plugins from './modules/plugins'
import webpack from 'webpack'
import GUtil from 'gulp-util'
import WebpackDevServer from 'webpack-dev-server'

const confArray = []
const generateConfiguration = (setup) => configurationGenerator(pipe.apply(pipe, confArray))(setup)
const getConfiguration = (setup) => generateConfiguration(setup).build
const addConfiguration = (...elements) => Array.prototype.push.apply(confArray, elements)

const compiler = (setup) => {
  const webpackConf = generateConfiguration(setup)
  return webpack(webpackConf.build, (err, result) => {
    if (err) { throw new GUtil.PluginError('webpack:build', err) }
    GUtil.log('[webpack:build]', result.toString(webpackConf.build.stats))
  })
}

const server = (setup) => {
  const webpackConf = generateConfiguration(setup)

  const url = `http://localhost:${webpackConf.build.devServer.port}`

  webpackConf.build.entry.index.unshift('react-hot-loader/patch', `webpack-dev-server/client?/${url}`, 'webpack/hot/dev-server')

  const wpCompiler = compiler(webpackConf.build)
  new WebpackDevServer(wpCompiler, webpackConf.build.devServer)
    .listen(webpackConf.build.devServer.port, 'localhost', function (err, result) {
      if (err) {
        console.log(err)
      }

      console.log(`Listening at ${url}`)
    }
  )
}

const setup = {
  init: () => {},
  add: addConfiguration,
  resolve: getConfiguration,
  server,
  compiler
}

export {
  setup,
  pipe,
  compose,
  analyzer,
  optimize,
  plugins,
  base,
  entry,
  output,
  module,
  resolve,
  define,
  babel,
  stats,
  webpack,
  dashboard
}
