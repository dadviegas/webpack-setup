import merge from 'webpack-merge'
import webpack from 'webpack'
import WebpackChunkHash from 'webpack-chunk-hash'
import ChunkManifestPlugin from 'chunk-manifest-webpack2-plugin'

const fileNameGeneratePattern = (options) => {
  return options.isDevelopment ? '[name].js' : '[name].[chunkhash].js'
}

export default (options = {}) => (setup = {}) => {
  const configuration = {
    plugins: [
      new webpack.NoEmitOnErrorsPlugin()
    ]
  }

  if (setup.isProduction || setup.isQA) {
    configuration.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          unused: true,    // Enables tree shaking
          dead_code: true, // Enables tree shaking
          pure_getters: true,
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          comparisons: true,
          sequences: true,
          evaluate: true,
          join_vars: true,
          if_return: true
        },
        output: {
          comments: false
        },
        sourceMap: true
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        options: {
          context: process.cwd()
        }
      })
    )

    if (setup.optimize.applyVersion) {
      configuration.plugins.unshift([
        new webpack.optimize.CommonsChunkPlugin({
          name: setup.applyManifest ? ['vendor', 'manifest'] : ['vendor'],
          minChunks: Infinity
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),
        new ChunkManifestPlugin({
          filename: 'chunk-manifest.json',
          manifestVariable: 'webpackManifest'
        })
      ])

      setup.build.output = {
        ...setup.build.output,
        filename: fileNameGeneratePattern(setup),
        chunkFilename: fileNameGeneratePattern(setup)
      }
    }

    if (setup.optimize.applyCommonsChunk) {
      configuration.plugins.push([
        new webpack.optimize.CommonsChunkPlugin({
          name: 'commons',
          filename: 'commons.[chunkhash].js',
          minChunks: 3
        })
      ])
    }

    setup.build = merge(setup.build, configuration)
  }

  return setup
}
