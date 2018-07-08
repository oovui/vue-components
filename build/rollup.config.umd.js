import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'oovui',
    file: 'dist/oovui.umd.js',
    format: 'umd',
  },
})

export default config