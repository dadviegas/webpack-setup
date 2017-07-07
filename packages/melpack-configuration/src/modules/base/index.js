export default (options = {}) => (setup = {}) => {
  const configuration = {
    watch: false,
    devtool: setup.isDevelopment ? 'inline-source-map' : 'cheap-source-map',
    context: setup.paths.source,
    performance: {
      hints: setup.isProduction ? 'warning' : false
    },
    devServer: {
      contentBase: setup.paths.contentBase,
      historyApiFallback: true,
      noInfo: false,
      headers: { 'X-Custom-Header': 'yes' },
      stats: {
        colors: true
      },
      hot: true,
      ...setup.devServer
    },
    ...options
  }

  setup.build = setup.merge(setup.build, configuration)
  return setup
}
