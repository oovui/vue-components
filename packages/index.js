import OButton from './components/button/OButton.vue'

const components = {
  OButton
}


const install =  function (Vue) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });

}

const plugin = {
  //eslint-disable-next-line no-undef
  version: VERSION,
  install
}


 export default plugin

 // Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}