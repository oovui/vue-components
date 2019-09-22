<template>
  <span class="oov-switch oov-switch-custom" :class="classes" @click="toggle">
    <span class="switch-inner">
       <slot name="open" v-if="checked === true"></slot>
       <slot name="close" v-if="checked === false"></slot>
    </span>
  </span>
</template>
<script>
export default {
  name:'OSwitch',
  model:{
    prop:'checked'
  },
  props:{
    checked: {
      type: Boolean,
      required:true,
      default: false
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  computed:{
    classes(){  
      return {
        checked:!!this.checked,
        disabled:!!this.disabled
      }
    },
  },
  methods:{
    toggle(){  
      const newValue = !this.checked;
      if(this.disabled) return;
      // v-model event
      this.$emit('input',newValue);
      //parent event
      this.$emit('change',newValue);
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/index.scss';
.oov-switch {
  position: relative;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.25);
  height: 22px;
  min-width: 44px;
  line-height: 22px;
  vertical-align: middle;
  border-radius: 100px;
  transition: all 0.36s;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
    background-color: #ccc;
    opacity: 0.6;
  }
  &::after{
    position: absolute;
    width: 18px;
    height: 18px;
    left: 1px;
    top: 2px;
    border-radius: 18px;
    background-color: #fff;
    content: ' ';
    transition: all 0.36s;
  }
  
  .switch-inner{
    color: #fff;
    font-size: 12px;
    margin-left: 24px;
    margin-right: 6px;
    display: flex;
    align-items: center;
    height: 22px;
    i{
      display: flex;
      align-items: center;
    }
  }

  // selected styles
  &.checked{
    background-color: #1890ff;
    &::after{
     left: 100%;
     transform: translateX(-100%);
     margin-left: -1px;
    }
    .switch-inner{
      margin-left: 6px;
    }

  }
}
</style>
