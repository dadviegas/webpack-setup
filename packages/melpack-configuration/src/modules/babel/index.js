import module from '../module'

export default (options = {}) => (setup = {}) => {
  const babelUse = {
    options: {
      presets: ['env']
    }
  }

  if (setup.isDevelopment) {
    babelUse.options.plugins = ['react-hot-loader/babel']
  }

  module({
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          include: setup.paths.source,
          use: {
            loader: 'babel-loader',
            ...babelUse
          },
          ...options
        }
      ]
    }
  })(setup)

  return setup
}
