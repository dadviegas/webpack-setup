import {
  entry,
  setup,
  html,
  style,
  define,
  hotReload, babel
} from 'melpack-web-builder'

setup.add(
  entry({
    index: ['./index.js'],
    vendor: ['react', 'react-dom']
  }),
  html({
    filename: 'index.html',
    template: './src/index.html',
    chunks: ['vendor', 'index']
  }),
  style(),
  babel(),
  define(),
  hotReload()
)

export default (env = {}) => {
  const conf = {
    ...env,
    target: './dist',
    applyManifest: true,
    optimize: {
      analyzer: false,
      applyVersion: true,
      applyCommonsChunk: false
    }
  }

  return setup.resolve(conf)
}
