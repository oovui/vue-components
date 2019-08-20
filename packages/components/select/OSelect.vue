<template>
  <div class="oov-select oov-select-custom" 
    :style="`width:${width}px`"
    @click.stop="selectClick"
    v-clickoutside="closeSelect">
    <!-- 选择区 -->
    <div class="select-section">
      <span v-show="placeholder&&!singleSelectedValue">{{placeholder}}</span>
      <span v-show="singleSelectedValue">{{singleSelectedValue}}</span>
    </div>
    <!-- dropdown下拉区 -->
    <transition>
      <ul class="selct-dropdown" v-show="showOptions" >
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>
<script>
export default {
  name:'OSelect',
  props:{
    width:{
      type:[ Number,String ]
    },
    disabled:{
      type: Boolean,
      default: false
    },
    value:{},
    placeholder: {
      type: String
    },
    multiple: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    filterTip:{
      type:String,
      default:'无匹配数据'
    }
  },
  model:{
    prop:'value',
    event:'change'
  },
  provide(){
    return {
      'select':this,
      'selectLabel':this.modelObject
    }
  },
  data(){
    return {
      showOptions: false,
      // singleSelectedValue: '',
      multipleSelectedValue: [],
      modelObject:{
        value:''
      }
    }
  },
  computed:{
    singleSelectedValue(){
      return this.modelObject.value
    }
  },
  watch:{
    
  },
  methods:{
    selectClick(){
      if(this.disabled) return
      // if(this.showOptions) return
      this.showOptions =  !this.showOptions
    },
    closeSelect(){
      this.showOptions = false;
    },
    selectModelChangeHandle(){
      console.log("selectModelChangeHandle");
    }
  },
  mounted(){
    console.log("select mounted")
    console.log("v-model:",this.value);
    console.log(this.modelObject)

  }
}
</script>
<style lang="scss">
@import '../../styles/index.scss';
.oov-select {
  width:100%;
  display: inline-block;
  position: relative;
  outline: 0;
  user-select: none;
  height: 32px;
  cursor: pointer;
  
  .select-section{
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    transition: all 0.3s;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    height: 30px;
    line-height: 30px;
    padding: 0 8px;
    &:hover{
      border:1px solid $oov-focused-color;
    }
  }

  .selct-dropdown{
    width: 100%;
    list-style: none;
    outline: none;
    max-height: 250px;
    overflow: auto;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-sizing: border-box;
    z-index: 9999;
    position: absolute;
    left: 0;
    top: 34px;
    transition: all 0.1s;
  }
}
</style>