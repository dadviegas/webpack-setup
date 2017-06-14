import {
  pipe, compose,
  base, entry, output, resolve,
  define, babel, optimize, stats,
  analyzer, plugins, module, setup, hotReload, externals,
  dashboard
} from 'melpack-configuration'
import html from './modules/html'
import style from './modules/style'

setup.add(
  dashboard(),
  base(),
  entry(),
  output(),
  resolve(),
  stats(),
  optimize()
)

export {
  hotReload,
  analyzer,
  pipe, compose,
  base, entry, output, resolve,
  define, babel, optimize,
  module,
  plugins,
  setup,
  dashboard,
  html,
  style,
  externals
}
