import HtmlWebpackPlugin from 'html-webpack-plugin'

export default (options) => (setup) => {
  const {
    template = 'template.html',
    title = '',
    filename = 'index.html',
    chunks,
    commonChunks = ['vendor', 'manifest', 'commons']
  } = options

  let chunksToApply

  if (chunks instanceof String) {
    chunksToApply = commonChunks.push(chunks)
  }

  if (chunks instanceof Array) {
    chunksToApply = commonChunks.concat(chunks)
  }

  if (chunksToApply) {
    const page = {
      title: title,
      filename: filename,
      template: template,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      chunks: chunksToApply
    }

    if (setup.isLocal || setup.isDevelopment || setup.isStaging) {
      delete page.minify
    }

    const htmlPage = new HtmlWebpackPlugin(page)

    setup.build = setup.merge(setup.build, {
      plugins: [
        htmlPage
      ]
    })
  }

  return setup
}
