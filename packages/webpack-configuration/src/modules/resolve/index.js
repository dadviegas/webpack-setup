import merge from 'webpack-merge'

export default (options = {}) => (setup = {}) => {
  const configuration = {
    resolve: {
      symlinks: true,
      alias: {
        source: setup.paths.source,
        assets: setup.paths.assets
      },
      modules: [
        setup.paths.nodeModules,
        setup.paths.source,
        '.'
      ],
      extensions: ['.js', '.jsx', '.json', '.css', '.sass', '.scss', '.html'],
      unsafeCache: true
    }
  }

  setup.build = merge(setup.build, configuration, {resolve: options})
  return setup
}
