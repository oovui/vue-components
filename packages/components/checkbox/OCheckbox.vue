<template>
  <label :class="classes">
    <span class="checkbox-input-wrapper" :class="checkboxInputWrapperClasses">
      <span class="checkbox-icon"></span>
      <input
        type="checkbox"
        class="checkbox-input"
        :value.prop="value"
        :checked="checked"
        @change="change"
        v-bind="$attrs"
      />
    </span>
    <span class="checkbox-label">
      <slot></slot>
    </span>
  </label>
</template>
<script>
import { checkboxClass } from '../../config/index'
export default {
  name: 'OCheckbox',
  props: {
    modelValue: {
      type: [Boolean, Array],
      default: false
    },
    value: {},
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  model: {
    prop: 'modelValue',
    event: 'update'
  },
  computed: {
    isInGroup() {
      return (
        (this.$parent && this.$parent.$options.customOption) ===
        'oovCheckboxGroup'
      )
    },
    classes() {
      return [...checkboxClass]
    },
    checkboxInputWrapperClasses() {
      return {
        disabled: !!this.$attrs.hasOwnProperty('disabled')
      }
    },
    checked() {
      //单个checkbox，v-model 默认为true 或false，多个checkbox v-model 为 Array
      if (this.isInGroup) {
        return this.$parent.value.includes(this.value)
      } else {
        if (this.modelValue instanceof Array) {
          return this.modelValue.includes(this.value)
        } else {
          return this.modelValue === this.trueValue
        }
      }
    }
  },
  methods: {
    change(e) {
      const isChecked = e.target.checked
      if (this.isInGroup) {
        const newValue = [...this.$parent.value]
        if (isChecked) {
          newValue.push(this.value)
        } else {
          //delete and return, will change newValue
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$parent.$emit('update', newValue)
      } else {
        if (this.modelValue instanceof Array) {
          //copy array
          const newValue = [...this.modelValue]
          if (isChecked) {
            newValue.push(this.value)
          } else {
            //delete and return, will change newValue
            newValue.splice(newValue.indexOf(this.value), 1)
          }
          this.$emit('update', newValue)
        } else {
          this.$emit('update', isChecked ? this.trueValue : this.falseValue)
        }
      }
    }
  }
}
</script>

