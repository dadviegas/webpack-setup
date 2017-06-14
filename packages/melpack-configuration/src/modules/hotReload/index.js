import plugins from '../plugins'

export default (options = {}) => (setup = {}) => {
  const hotReloadModuled = [
    'react-hot-loader/patch',
    // activate HMR for React
    'webpack-dev-server/client?http://localhost:8001',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack/hot/only-dev-server'
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
  ]

  if (!setup.isProduction && !setup.isQA) {
    const hotReload = new setup.webpack.HotModuleReplacementPlugin()
    const namedModuled = new setup.webpack.NamedModulesPlugin()

    const entry = {}
    Object.keys(setup.build.entry).forEach((key) => {
      if (key === 'vendor') {
        entry[key] = setup.build.entry[key]
      } else {
        entry[key] = hotReloadModuled.concat(setup.build.entry[key])
      }
    })

    setup.build.entry = entry

    plugins([hotReload, namedModuled])(setup)
  }

  return setup
}
