import merge from 'webpack-merge'
import webpack from 'webpack'
import path from 'path'

export const compose = (f, g) => (...args) => g(f(...args))
export const pipe = (...fns) => fns.reduce(compose)

export const generator = (options = {}) => (setup = {}) => {
  setup.build = merge(setup.build, options)
  return setup
}

export const settingsGenerator = (options = {}) => (setup = {}) => {
  const environment = setup.environment || 'development'
  const analyzer = setup.analyzer
  setup = {
    environment: environment,
    isProduction: environment === 'production',
    isTest: environment === 'test',
    isStaging: environment === 'staging',
    isDevelopment: environment === 'development',
    isLocal: environment === 'local',
    paths: {
      contentBase: path.resolve(process.cwd(), './dist'),
      root: path.resolve(process.cwd()),
      source: path.resolve(process.cwd(), setup.source || './src'),
      assets: path.resolve(process.cwd(), setup.assets || './assets'),
      target: path.resolve(process.cwd(), setup.target || './build'),
      nodeModules: path.join(process.cwd(), 'node_modules')
    },
    analyzer: analyzer,
    optimize: {
      applyVersion: options.optimize ? options.optimize.applyVersion : true,
      applyCommonsChunk: options.optimize ? options.optimize.applyCommonsChunk : true
    },
    devServer: {
      publicPath: options.devServer ? options.devServer.publicPath : '/',
      port: options.devServer ? options.devServer.port : 3000
    },
    ...setup,
    ...options,
    merge,
    webpack
  }

  setup.build = {}

  return setup
}

export const configurationGenerator = (composeWebpack) => compose(settingsGenerator(), composeWebpack)
