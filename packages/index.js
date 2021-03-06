import OButton from './components/button/OButton.vue'
import OIcon from './components/icon/Icon.vue'
import OInput from './components/input/index'
import ORadio from './components/radio/index'
import ORadioGroup from './components/radio/ORadioGroup.vue'
import OCheckbox from './components/checkbox/index'
import OCheckboxGroup from './components/checkbox/OCheckboxGroup.vue'
import OSelect from './components/select/index'
import OOption from './components/select/OOption.vue'
import OCssicon from './components/cssicon/OCssicon.vue'
import OTag from './components/tag/Otag.vue'
import OSwitch from './components/switch/index'
import ORate from './components/rate/index'
import OSlider from './components/slider/index'
import OUpload from './components/upload/index'
// directives
import clickoutside from './directives/clickoutside.js'

const components = {
  OIcon,
  OCssicon,
  OButton,
  OInput,
  ORadio,
  ORadioGroup,
  OCheckbox,
  OCheckboxGroup,
  OSelect,
  OOption,
  OTag,
  OSwitch,
  ORate,
  OSlider,
  OUpload
}


const install =  function (Vue) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });

  Vue.directive('clickoutside', clickoutside)


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