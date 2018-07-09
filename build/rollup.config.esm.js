import base, {banner} from './rollup.config.base';


const config = Object.assign({}, base, {
  output: {
    name: 'oovui',
    file: 'dist/oovui.esm.js',
    format: 'es',
    banner
  },
})

export default config