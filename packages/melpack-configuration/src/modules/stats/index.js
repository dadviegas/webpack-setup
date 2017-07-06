import merge from 'webpack-merge'

export default (options) => (setup = {}) => {
  // read more on https://webpack.js.org/configuration/stats/
  // options could be an object or string
  setup.build = merge(setup.build, { stats: options || 'normal' })
  return setup
}
