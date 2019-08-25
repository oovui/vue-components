// 构建页面 views目录
import InputDemo from './views/input.vue'
import RadioDemo from './views/raido'
import CheckboxDemo from './views/checkbox'
import SelectDemo from './views/select'
import CssiconDemo from './views/cssicon'
import TagDemo from './views/tag'
import SwitchDemo from './views/switch'
// 以下为本地测试页面，testViews目录
import SlotDemo from './testViews/SlotDemo.vue'
import InputDemos from './testViews/inputdemos.vue'
import DemoDemos from './testViews/demoDemos'
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
  },{
    name:'CssiconDemo',
    component:CssiconDemo
  },{
    name:'TagDemo',
    component:TagDemo
  },{
    name:'Switch',
    component:SwitchDemo
  }
]
let menusTest = [
  {
    name: 'SlotDemo',
    component: SlotDemo,
  },{
    name:'InputDemos',
    component:InputDemos
  },{
    name:'DemoDemos',
    component:DemoDemos
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
