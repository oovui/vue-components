import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import oovui from '@oovui/vue'
// import '@oovui/vue/lib/oovui.css'
import oovui from '../../lib/oovui.esm'
import '../../lib/oovui.css'
Vue.use(oovui)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
