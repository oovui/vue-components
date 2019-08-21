<template>
	<li class="oov-select-option oov-select-option-custom"
	 	@click.stop="doSelect"
    @mouseout.stop="blur"
    v-show="!hidden"
    ref="option">
		<slot></slot>
	</li>
</template>
<script>
import { ArrayObjectHasValue,ArrayObjectDeleteByValue, ArrayDeleteByValue } from '../../utils/ArrayUtil.js'
export default {
	name:'OOption',
	inject: ['select','selectedObject'],
	props:{
		value:{
      required: true
		},
		disabled: {
      type: Boolean,
      default: false
    }
	},
	data () {
    return {
      selected: false,
      index: 0,
      isFocus: false,
      hidden: false,
      searchLabel: ''
    }
	},
	methods: {
    doSelect () {
      //console.log(this.value,this.$slots.default[0].text);
      this.select.showOptions = false;
      let modelValue = this.select.value;
      if(modelValue instanceof Array){
        //多选的情况下，已经存在则删除，否则添加
        let selectedObject = this.selectedObject;
        if(ArrayObjectHasValue(selectedObject,this.value)){
          selectedObject = ArrayObjectDeleteByValue(selectedObject,this.value);
          modelValue = ArrayDeleteByValue(modelValue,this.value);
        }else{
          selectedObject.push({
            value:this.value,
            label: this.$slots.default[0].text
          })
          modelValue.push(this.value);
        }
        this.select.$emit('change',modelValue);
        
      }else{
        this.selectedObject.value = this.$slots.default[0].text;
        //change parent select v-model
        this.select.$emit('change',this.value);
      }
    },
    blur () {
      this.isFocus = false
    }
  },
  mounted(){
    let modelValue = this.select.value
    console.log("v-model:",modelValue);
    if(modelValue instanceof Array){
      console.log("multiple")
      if(modelValue.includes(this.value)){
        this.selectedObject.push({
          value:this.value,
          label:this.$slots.default[0].text
        });
      }

    }else{
      console.log("single")
      if(modelValue==this.value){
        this.selectedObject.value = this.$slots.default[0].text;
      }
    }
    
  }
}
</script>
<style lang="scss">
  .oov-select-option{
    height: 32px;
    line-height: 32px;
    padding: 0 8px;
    &:hover{
      background-color: #fafafa;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.65);
    }
  }
</style>