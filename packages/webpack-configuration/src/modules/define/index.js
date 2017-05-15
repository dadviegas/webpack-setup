import plugins from '../plugins'
import webpack from 'webpack'

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
  let releaseFlags = {}
  const environment = plugins(new webpack.EnvironmentPlugin({
    NODE_ENV: setup.environment,
    DEBUG: setup.isStaging || setup.isDevelopment || setup.isLocal
  }))

  if (options !== {}) {
    releaseFlags = plugins(new webpack.DefinePlugin({
      ...getReleaseFlags({
        RF_ENVIRONMENT: setup.environment,
        ...options
      })
    }))
  }

  environment(setup)
  releaseFlags(setup)

  return setup
}
