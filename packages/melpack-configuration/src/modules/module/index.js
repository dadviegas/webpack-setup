export default (options) => (setup) => {
  const configuration = {
    module: { rules: [] },
    ...options
  }

  setup.build = setup.merge(setup.build, configuration)
  return setup
}
