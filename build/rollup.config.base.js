import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import cjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import requireContext from 'rollup-plugin-require-context'
import fs from 'fs'
import css from 'rollup-plugin-css-only'
import CleanCSS from 'clean-css'
import autoprefixer from 'autoprefixer'
const config = require('../package.json')
const banner =
  '/*!\n' +
  ' *  @oovui/vueui v' + config.version + '\n' +
  ' * (c) 2018-' + new Date().getFullYear() + ' itshizhan@163.com\n' +
  ' * Released under the MIT License.\n' +
  ' */';

export {
  banner
} 


export default {
  input: 'packages/index.js',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    cjs(),
    requireContext(),
    css({
      output: function (style, styleNodes) {
        //fs.writeFileSync('dist/oovui.css', new CleanCSS().minify(style).styles)
        fs.writeFileSync('dist/oovui.css', style);
      },
    }),
    vue({
      css:false,
      style:{
        postcssPlugins:[autoprefixer]
      }
    }),
    babel({
      exclude: 'node_modules/**',
      'plugins': [
        'external-helpers',
      ],
      runtimeHelpers: true,
    }),
    replace({
      VERSION: JSON.stringify(config.version),
    }),
  ]
  // watch: {
  //   include: 'packages/**',
  // },
}
