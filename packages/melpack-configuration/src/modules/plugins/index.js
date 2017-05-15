import merge from 'webpack-merge'

export default (options) => (setup) => {
  let configuration
  if (options instanceof Array) {
    configuration = {
      plugins: [
        ...options
      ]
    }
  } else {
    configuration = {
      plugins: [
        options
      ]
    }
  }

  setup.build = merge(setup.build, configuration)
  return setup
}
