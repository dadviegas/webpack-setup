import merge from 'webpack-merge'

export default (options = {}) => (setup = {}) => {
  const configuration = {
    output: {
      filename: `[name].js`,
      chunkFilename: '[id].chunk.js',
      libraryTarget: 'umd',
      path: setup.paths.target,
      publicPath: setup.target,
      ...options
    }
  }

  setup.build = merge(setup.build, configuration)
  return setup
}
