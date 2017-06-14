import {pipe, compose, configurationGenerator} from './modules/helpers'
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
import dashboard from './modules/dashboard'
import hotReload from './modules/hotReload'
import externals from './modules/externals'
import webpack from 'webpack'

const confArray = []
const generateConfiguration = (setup) => configurationGenerator(pipe.apply(pipe, confArray))(setup)
const getConfiguration = (setup) => generateConfiguration(setup).build
const addConfiguration = (...elements) => Array.prototype.push.apply(confArray, elements)

const setup = {
  init: () => {},
  add: addConfiguration,
  resolve: getConfiguration
}

export {
  hotReload,
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
  externals,
  dashboard
}
