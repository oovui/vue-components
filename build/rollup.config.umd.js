import base , {banner} from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    //exports: 'named',
    name: 'oovui',
    file: 'dist/oovui.umd.js',
    format: 'umd',
    banner
  },
})

export default config