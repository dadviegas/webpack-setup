import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import merge from 'webpack-merge'

export default (options) => (setup) => {
  const configuration = {plugins: []}

  if (setup.analyzer) {
    configuration.plugins.push(new BundleAnalyzerPlugin(options))
    setup.build = merge(setup.build, configuration)
  }

  return setup
}
