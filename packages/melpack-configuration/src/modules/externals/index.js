export default (options = {}) => (setup = {}) => {
  const configuration = {
    externals: {
      ...options
    }
  }

  setup.build = setup.merge(setup.build, configuration)
  return setup
}
