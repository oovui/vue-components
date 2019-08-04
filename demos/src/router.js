import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
// 构建页面 views目录
import InputDemo from './views/input.vue'
// 以下为本地测试页面，testViews目录
import SlotDemo from './testViews/SlotDemo.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  // 构建组件 ../lib/ 目录
  { path: '/inputDemo', component: InputDemo },
  // 以下为本地测试组件，/components目录
  { path: '/slotdemo', component: SlotDemo },
]

const router = new VueRouter({
  routes,
})

export default router
