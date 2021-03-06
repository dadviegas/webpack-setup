export default (options = {}) => (setup = {}) => {
  const configuration = {
    output: {
      filename: `[name].js`,
      chunkFilename: '[id].chunk.js',
      path: setup.paths.target,
      ...options
    }
  }

  setup.build = setup.merge(setup.build, configuration)
  return setup
}
