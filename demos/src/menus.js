// 构建页面 views目录
import InputDemo from './views/input.vue'
// 以下为本地测试页面，testViews目录
import SlotDemo from './testViews/SlotDemo.vue'
let menus = [
  {
    name: 'InputDemo',
    component: InputDemo,
  },
]
let menusTest = [
  {
    name: 'SlotDemo',
    component: SlotDemo,
  },
]

menus.map(item => {
  item.to = '/' + item.name
  item.path = '/' + item.name
})
menusTest.map(item => {
  item.to = '/' + item.name
  item.path = '/' + item.name
})
export { menus, menusTest }
