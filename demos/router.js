import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/Home.vue';
import Buttons from './components/Buttons';

const routes = [

  { path: '/', component: Home },
  { path: '/buttons', component: Buttons }

]

const router = new VueRouter({
  routes
})

export default router;