import {
  pipe, compose,
  base, entry, output, resolve,
  define, babel, stats, optimize,
  configurationGenerator, compiler,
  analyzer, plugins, module
} from 'melpack-configuration'

const confArray = [
  analyzer(),
  base(),
  entry(),
  output(),
  resolve(),
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
  compiler
}
