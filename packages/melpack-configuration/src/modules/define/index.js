import plugins from '../plugins'
import dashboard from '../dashboard'

const getReleaseFlags = (releaseFlags = {}) => {
  const data = {}
  Object.keys(releaseFlags).forEach((key) => {
    if (typeof releaseFlags[key] === 'string') {
      data[key] = JSON.stringify(releaseFlags[key])
    } else {
      data[key] = releaseFlags[key]
    }
  })

  return data
}

export default (options = {}) => (setup = {}) => {
  const environment = new setup.webpack.EnvironmentPlugin({
    NODE_ENV: setup.environment,
    DEBUG: setup.isStaging || setup.isDevelopment || setup.isLocal
  })

  const releaseFlags = new setup.webpack.DefinePlugin({
    ...getReleaseFlags({
      RF_ENVIRONMENT: setup.environment,
      ...options
    })
  })

  plugins([environment, releaseFlags])(setup)

  dashboard()(setup)
  plugins(new setup.webpack.HotModuleReplacementPlugin())(setup)

  return setup
}
