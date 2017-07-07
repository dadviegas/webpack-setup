import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'

export default (options) => (setup) => {
  const configuration = {plugins: []}

  if (setup.analyzer) {
    configuration.plugins.push(new BundleAnalyzerPlugin(options))
    setup.build = setup.merge(setup.build, configuration)
  }

  return setup
}
