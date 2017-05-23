import {
  setup,
  html,
  style,
  define
} from 'melpack-web-builder'

setup.add(
  html({
    filename: 'index.html',
    template: './src/index.html',
    chunks: ['index']
  }),
  style(),
  define()
)

export default (env = {}) => {
  const conf = {
    ...env,
    target: './dist',
    optimize: {
      analyzer: false,
      applyVersion: false,
      applyCommonsChunk: false
    }
  }

  return setup.resolve(conf)
}
