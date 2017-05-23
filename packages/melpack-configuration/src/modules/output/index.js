import merge from 'webpack-merge'

export default (options = {}) => (setup = {}) => {
  const configuration = {
    output: {
      filename: `[name].js`,
      chunkFilename: '[id].chunk.js',
      path: setup.paths.target,
      ...options
    }
  }

  setup.build = merge(setup.build, configuration)
  return setup
}
