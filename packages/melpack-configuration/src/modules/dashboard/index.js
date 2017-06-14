var DashboardPlugin = require('webpack-dashboard/plugin')

export default (options) => (setup) => {
  const configuration = {plugins: []}

  if (setup.isDevelopment) {
    configuration.plugins.push(new DashboardPlugin({ port: 8001 }))
    setup.build = setup.merge(setup.build, configuration)
  }

  return setup
}
