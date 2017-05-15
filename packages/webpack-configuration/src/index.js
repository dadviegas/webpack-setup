import {pipe, compose, setup} from './modules/helpers'
import entry from './modules/entry'
import output from './modules/output'
import resolve from './modules/resolve'
import module from './modules/module'
import define from './modules/define'
import base from './modules/base'
import babel from './modules/babel'
import stats from './modules/stats'
import optimize from './modules/optimize'
import analyzer from './modules/analyzer'
import plugins from './modules/plugins'
import webpack from 'webpack'
import GUtil from 'gulp-util'

const enviromnentSetup = setup()

const configurationGenerator = (composeWebpack) => compose(enviromnentSetup, composeWebpack)

const compiler = (setup) => {
  return webpack(setup, (err, result) => {
    if (err) { throw new GUtil.PluginError('webpack:build', err) }
    GUtil.log('[webpack:build]', result.toString(setup.stats))
  })
}

export {
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
  configurationGenerator,
  compiler
}
