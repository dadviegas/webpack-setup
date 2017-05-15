import { module } from 'webpack-configuration'

export default (options = {}) => (setup = {}) => {
  module({
    module: {
      rules: [
        {
          test: /\.(css|scss|sass)$/,
          loader: 'style!css!sass'
        }
      ]
    }
  })(setup)

  return setup
}
