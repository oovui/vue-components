<template>
  <div class="oov-select oov-select-custom" 
    :style="`width:${width}px`"
    :class="selectClasses"
    @click.stop="selectClick"
    v-clickoutside="closeSelect">
    <!-- 选择区 -->
    <div class="select-section single" ref="selectSection" v-if="!this.multiple">
      <span v-show="placeholder&&!singleSelectedValue">{{placeholder}}</span>
      <span v-show="singleSelectedValue">{{singleSelectedValue}}</span>
    </div>
    <div class="select-section multiple" ref="selectSection" v-if="this.multiple">
      <span v-show="placeholder&&multipleSelectedValue.length==0">{{placeholder}}</span>
      <!-- <span v-show="multipleSelectedValue.length>0">{{multipleSelectedValue}}</span> -->
      <o-tag closable :value="item.value" v-for="item of multipleSelectedValue" :key="item.value" @close="deleteItem">{{item.label}}</o-tag>
    </div>
    <!-- dropdown下拉区 -->
    <transition>
      <ul class="selct-dropdown" v-show="showOptions" :style="`top:${selectHeight}px`">
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
      'selectedObject':this.selectedObject
    }
  },
  data(){
    return {
      showOptions: false,
      // selectedObject:this.multiple?[{value:'',label:''}]:{value:'',label:''}        
      selectedObject:this.multiple?[]:{},
      selectHeight:34         
    }
  },
  computed:{
    selectClasses(){
      return this.multiple?'multiple':'single'
    },
    singleSelectedValue(){
      return this.selectedObject
    },
    multipleSelectedValue(){
      //[{value:'',label:''}]
      return this.selectedObject
    }
  },
  methods:{
    selectClick(){
      if(this.multiple){
        let selectSection = this.$refs.selectSection;
        this.selectHeight = Number(selectSection.offsetHeight) + 4;
      }
      if(this.disabled) return
      // if(this.showOptions) return
      this.showOptions =  !this.showOptions
    },
    closeSelect(){
      this.showOptions = false;
    },
    selectModelChangeHandle(){
      console.log("selectModelChangeHandle");
    },
    //删除多选的选项
    deleteItem(e,tagData){
      console.log("deleteItem",tagData);
      console.log(this.selectedObject)
      //update selectedObject
      for(let i=0;i<this.selectedObject.length;i++){
        if(this.selectedObject[i].value===tagData.value){
          this.selectedObject.splice(i, 1);
          break;
        }
      }
      //update modelValue/v-model
      for(let i=0;i<this.value.length;i++){
        if(this.value[i]==tagData.value){
          this.value.splice(i,1);
          this.$emit('change',this.value);
          break;
        }
      }
      this.showOptions = false;
    }
  },
  mounted(){
    console.log("select mounted")
    console.log("this multiple:",this.multiple);
    console.log("v-model:",this.value);
    console.log(this.selectedObject)
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
    .oov-tag{
      margin-right: 2px;
    }
  }
  .select-section.multiple{
    min-height: 30px;
    height: auto;
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
    // top: 34px;
    transition: all 0.1s;
  }
}
.oov-select.multiple{
  height: auto;
  min-height: 30px;
}
</style>