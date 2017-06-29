import { module } from 'melpack-configuration'

export default (options = {}) => (setup = {}) => {
  module({
    module: {
      rules: [{
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      }]
    }
  })(setup)

  return setup
}