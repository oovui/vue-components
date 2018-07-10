<template>
    <button :type="htmlType" :class="classes" :disabled="disabled" @click="handleClick">
        <!-- type="load-a" 定义load的图标 -->
        <Icon class="oov-load-loop" type="load-a" v-if="loading"></Icon>
        <span v-if="showSlot" ref="slot">
            <slot></slot>
        </span>
    </button>
</template>

<script>
import Utils from "../../utils";
import Icon from "../icon";

const prefixCls = "oov-btn";
export default {
  name: "OButton",
  props: {
    //button:类型，default,primary,ghost，dashed，text,默认default
    type: {
      validator(value) {
        return Utils.oneOf(value, [
          "default",
          "primary",
          "ghost",
          "dashed",
          "text"
        ]);
      },
      default: "default"
    },

    //button形状：全圆角和直角，默认是4px圆角
    shape: {
      validator(value) {
        return Utils.oneOf(value, ["circle", "rectangle"]);
      }
    },
    //button大小:small,large,full
    size: {
      validator(value) {
        return Utils.oneOf(value, ["small", "large", "full"]);
      }
    },
    loading: Boolean,
    disabled: Boolean,
    htmlType: {
      default: "button",
      validator(value) {
        return Utils.oneOf(value, ["button", "submit", "reset"]);
      }
    }
  },
  data() {
    return {
      showSlot: true
    };
  },
  computed: {
    classes() {
      return [
        {
          [`${prefixCls}-${this.type}`]: !!this.type,
          [`${prefixCls}-${this.shape}`]: !!this.shape,
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-loading`]: this.loading != null && this.loading
        }
      ];
    }
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    }
  },
  mounted() {
    this.showSlot = this.$slots.default !== undefined;
    /**
     * vm.$slots: 用来访问被 slot 分发的内容,每个具名 slot 有其相应的属性（例如：slot="foo" 中的内容将会在 vm.$slots.foo 中被找到）。
     * default 属性包括了所有没有被包含在具名 slot 中的节点。
     *****************/
  }
};
</script>



<style lang="scss">
//base
@import "../../styles/index";
@import "./this.scss";
</style>
