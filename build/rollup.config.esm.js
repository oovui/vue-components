import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'oovui',
    file: 'dist/oovui.esm.js',
    format: 'es',
  },
})

export default config