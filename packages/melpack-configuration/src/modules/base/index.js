import merge from 'webpack-merge'

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
      publicPath: '/',
      port: 8001,
      historyApiFallback: true,
      noInfo: false,
      headers: { 'X-Custom-Header': 'yes' },
      stats: {
        colors: true
      },
      hot: true
    },
    ...options
  }

  setup.build = merge(setup.build, configuration)
  return setup
}
