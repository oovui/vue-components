import Vue from 'vue';
import App from './App.vue';
import router from './router.js';

import oovui from '../lib/oovui.esm.js';

Vue.use(oovui);

import '../lib/oovui.css';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});