<template>
  <div class="oov-radio-group oov-radio-group-custom">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ORadioGroup',
  customOption: 'oovRadioGroup',
  props: {
    value: {}
  },
  model: {
    prop: 'value',
    event: 'select'
  },
  watch:{
    value(newVal){
      this.$emit('change',newVal)
    }
  }
}
</script>

