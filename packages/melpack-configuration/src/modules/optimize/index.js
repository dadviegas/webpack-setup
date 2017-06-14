import plugins from '../plugins'
import WebpackChunkHash from 'webpack-chunk-hash'
import ChunkManifestPlugin from 'chunk-manifest-webpack2-plugin'

const fileNameGeneratePattern = (options) => {
  return options.isDevelopment ? '[name].js' : '[name].[chunkhash].js'
}

export default (options = {}) => (setup = {}) => {
  plugins(new setup.webpack.NoEmitOnErrorsPlugin())(setup)

  if (setup.isProduction || setup.isQA) {
    plugins([
      new setup.webpack.optimize.UglifyJsPlugin({
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
      new setup.webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        options: {
          context: process.cwd()
        }
      })
    ])(setup)
  }
  plugins([
    new setup.webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity
    })
  ])
  if (setup.optimize.applyVersion) {
    plugins([
      // new setup.webpack.optimize.CommonsChunkPlugin({
      //   name: ['vendor', 'manifest'],
      //   minChunks: Infinity
      // }),
      new setup.webpack.HashedModuleIdsPlugin(),
      new WebpackChunkHash(),
      new ChunkManifestPlugin({
        filename: 'chunk-manifest.json',
        manifestVariable: 'webpackManifest'
      })
    ])(setup)

    setup.build.output = {
      ...setup.build.output,
      filename: fileNameGeneratePattern(setup),
      chunkFilename: fileNameGeneratePattern(setup)
    }
  }

  if (setup.optimize.applyCommonsChunk) {
    plugins([
      new setup.webpack.optimize.CommonsChunkPlugin({
        name: 'commons',
        filename: 'commons.[chunkhash].js',
        minChunks: 3
      })
    ])(setup)
  }

  return setup
}
