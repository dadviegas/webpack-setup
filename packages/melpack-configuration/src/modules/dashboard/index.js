var DashboardPlugin = require('webpack-dashboard/plugin')

export default (options) => (setup) => {
  const configuration = {plugins: []}

  configuration.plugins.push(new DashboardPlugin())
  setup.build = setup.merge(setup.build, configuration)

  return setup
}
