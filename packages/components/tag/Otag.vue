<template>
  <transition name="fade">
    <div class="oov-tag oov-tag-custom">
      <span class="tag-text">
        <slot></slot>
      </span>
      <o-cssicon type="close" size="10"  v-if="closable" @click.native.stop="closeHandle"/>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'OTag',
  props:{
    value:{
      default:''
    },
    closable:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    closeHandle(event){
      this.$emit('close',event,{
        label:this.$slots.default[0].text,
        value:this.value
      })
    }
  }
}
</script>
<style lang="scss">
.oov-tag{
  display: inline-block;
  line-height: 22px;
  height: 22px;
  padding: 0 7px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  background: #fafafa;
  font-size: 12px;
  cursor: pointer;
  .tag-text{
    display: inline-block;
    line-height: 20px;
    height: 20px;
    vertical-align: top;
  }
}
</style>