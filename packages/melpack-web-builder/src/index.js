import {
  pipe, compose,
  base, entry, output, resolve,
  define, babel, stats, optimize,
  configurationGenerator, compiler,
  analyzer, plugins, module
} from 'melpack-configuration'
import html from './modules/html'
import style from './modules/style'
import path from 'path'
const confArray = [
  analyzer(),
  base(),
  entry(),
  output(),
  resolve({
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  }),
  babel(),
  stats(),
  optimize()
]

const setup = {
  init: () => {},
  add: (...elements) => Array.prototype.push.apply(confArray, elements),
  build: (setup) => configurationGenerator(pipe.apply(pipe, confArray))(setup)
}

export {
  pipe, compose,
  base, entry, output, resolve,
  define, babel, stats, optimize,
  configurationGenerator, module,
  plugins,
  setup,
  compiler,
  html,
  style
}
