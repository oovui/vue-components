<template>
  <div class="oov-checkbox-group oov-checkbox-group-custom">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'OCheckboxGroup',
  customOption: 'oovCheckboxGroup',
  props: {
    value: {}
  },
  model: {
    prop: 'value',
    event: 'update'
  },
  watch:{
    value(newVal){
      this.$emit('change',newVal)
    }
  }
}
</script>

