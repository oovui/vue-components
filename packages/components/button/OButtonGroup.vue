
<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
import Utils from "../../utils";
const prefixCls = "oov-btn-group";
export default {
  name: "OButtonGroup",
  props: {
    size: {
      validator(value) {
        return oneOf(value, ["small", "large"]);
      }
    },
    shape: {
      validator(value) {
        return oneOf(value, ["circle", "circle-outline"]);
      }
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-${this.shape}`]: !!this.shape,
          [`${prefixCls}-vertical`]: this.vertical
        }
      ];
    }
  }
};
</script>