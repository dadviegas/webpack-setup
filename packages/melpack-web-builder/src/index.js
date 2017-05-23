import {
  pipe, compose,
  base, entry, output, resolve,
  define, babel, optimize, stats,
  analyzer, plugins, module, setup
} from 'melpack-configuration'
import html from './modules/html'
import style from './modules/style'

setup.add(
  base(),
  entry(),
  output(),
  resolve(),
  babel(),
  stats(),
  optimize()
)

export {
  analyzer,
  pipe, compose,
  base, entry, output, resolve,
  define, babel, optimize,
  module,
  plugins,
  setup,
  html,
  style
}
