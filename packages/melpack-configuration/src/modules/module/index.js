import merge from 'webpack-merge'

export default (options) => (setup) => {
  const configuration = {
    module: { rules: [] },
    ...options
  }

  setup.build = merge(setup.build, configuration)
  return setup
}
