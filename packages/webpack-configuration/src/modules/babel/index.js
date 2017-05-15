import module from '../module'

export default (options = {}) => (setup = {}) => {
  module({
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          include: setup.paths.source,
          use: {
            loader: 'babel-loader'
          },
          ...options
        }
      ]
    }
  })(setup)

  return setup
}
