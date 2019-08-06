<template>
  <label :class="classes">
    <span class="radio-input-wrapper" :class="radioInputWrapperClasses">
      <span class="radio-icon"></span>
      <input
        type="radio"
        class="radio-input"
        :value.prop="value"
        :checked="checked"
        @change="change"
        v-bind="$attrs"
      />
    </span>
    <span class="radio-label">
      <slot></slot>
    </span>
  </label>
</template>
<script>
import { radioClassPrefix, radioClassCustom } from '../../config/index'
export default {
  name: 'ORadio',
  props: {
    value: {
      type: [String, Number]
    },
    modelValue: {
      default: ''
    }
  },
  model: {
    prop: 'modelValue',
    event: 'update'
  },
  computed: {
    isInGroup() {
      return (
        (this.$parent && this.$parent.$options.customOption) === 'oovRadioGroup'
      )
    },
    classes() {
      return [radioClassPrefix, radioClassCustom]
    },
    radioInputWrapperClasses() {
      return {
        disabled: !!this.$attrs.hasOwnProperty('disabled')
      }
    },
    checked() {
      let modelValue = this.isInGroup ? this.$parent.value : this.modelValue
      return this.value == modelValue
      // return this.modelValue == this.value;
    }
  },
  methods: {
    change(e) {
      let isInGroup =
        (this.$parent && this.$parent.$options.customOption) === 'oovRadioGroup'
      if (isInGroup) {
        // 如果在o-radio-group 中使用
        this.$parent.$emit('select', this.value)
      } else {
        // console.log(this.value===e.target.value); // true
        this.$emit('update', this.value)
      }
    }
  }
}
</script>

