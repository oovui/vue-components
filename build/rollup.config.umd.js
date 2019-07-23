import base , {banner} from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {

    name: 'oovui',
    file: 'lib/oovui.umd.js',
    format: 'umd',
    banner,
    globals: {
      'vue': 'Vue',
      'feather-icons':'feather',
      '@babel/runtime/helpers/defineProperty':'_defineProperty'
    }
  },
})

export default config