import Vue from 'vue'
import App from './App.vue'

import oovui from '@oovui/vueui';
Vue.use(oovui);
import '@oovui/vueui/dist/oovui.css';

// import oovui from '../dist/oovui.esm.js';

// Vue.use(oovui);
// import '../dist/oovui.css';

new Vue({
  el: '#app',
  render: h => h(App)
});