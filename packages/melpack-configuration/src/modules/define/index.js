import plugins from '../plugins'

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
    DEBUG: !setup.isProduction && !setup.isQA
  })

  const releaseFlags = new setup.webpack.DefinePlugin({
    ...getReleaseFlags({
      RF_ENVIRONMENT: setup.environment,
      ...options
    })
  })

  plugins([environment, releaseFlags])(setup)
  return setup
}
