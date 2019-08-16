// 构建页面 views目录
import InputDemo from './views/input.vue'
import RadioDemo from './views/raido'
import CheckboxDemo from './views/checkbox'
import SelectDemo from './views/select'
// 以下为本地测试页面，testViews目录
import SlotDemo from './testViews/SlotDemo.vue'
import InputDemos from './testViews/inputdemos.vue'
let menus = [
  {
    name: 'InputDemo',
    component: InputDemo,
  },
  {
    name: 'RadioDemo',
    component: RadioDemo,
  },
  {
    name:'CheckboxDemo',
    component:CheckboxDemo,
  },{
    name:'SelectDemo',
    component:SelectDemo,
  },
]
let menusTest = [
  {
    name: 'SlotDemo',
    component: SlotDemo,
  },{
    name:'InputDemos',
    component:InputDemos
  }
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
