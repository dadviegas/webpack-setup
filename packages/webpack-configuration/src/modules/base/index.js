import merge from 'webpack-merge'

export default (options = {}) => (setup = {}) => {
  const configuration = {
    watch: false,
    devtool: setup.isDevelopment ? 'inline-source-map' : 'cheap-source-map',
    context: setup.paths.source,
    performance: {
      hints: 'warning'
    },
    devServer: {
      contentBase: setup.paths.contentBase,
      compress: true,
      port: 8181
    },
    ...options
  }

  setup.build = merge(setup.build, configuration)
  return setup
}
