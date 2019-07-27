import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/Home.vue';
import Buttons from './components/Buttons.vue';
import SlotDemo from './pages/SlotDemo.vue';
import OInput from './pages/OInput.vue';

const routes = [

  { path: '/', component: Home },
  { path: '/buttons', component: Buttons },
  { path: '/slotdemo', component: SlotDemo },
  { path: '/inputdemo', component: OInput }

]

const router = new VueRouter({
  routes
})

export default router;