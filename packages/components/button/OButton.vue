<template>
    <button  :type="htmlType" :class="classes" :disabled="disabled" @click="handleClick">
        <!-- type="circle" 定义load的图标 -->
        <Icon class="oov-load-loop" type="circle" v-if="loading"></Icon>
        <Icon :type="icon" v-if="icon && !loading"></Icon>
        <span v-if="showSlot" ref="slot">
            <slot></slot>
        </span>
    </button>
</template>

<script>
import { oneOf } from "../../utils";
import Icon from "../icon/Icon.vue";
// class 前缀
import { btnClassPrefix } from '../../config/index';


export default {
  name: "OButton",
  components:{
    Icon
  },
  props: {
    //button:类型，默认按钮(`default`), 品牌按钮(`primary`),信息按钮(`info`),
    //成功按钮(`success`),警告按钮(`warning`),危险或错误按钮(`danger/error`).
    type: {
      validator(value) {
        return oneOf(value, [
          "default",
          "primary",
          "info",
          "success",
          "warning",
          "danger",
          "error"
        ]);
      },
      default: "default"
    },

    //button形状：全圆角和直角，默认是4px圆角
    shape: {
      validator(value) {
        return oneOf(value, ["circle", "rectangle"]);
      }  
    },
    //button大小:small,large,full
    size: {
      validator(value) {
        return oneOf(value, ["small", "large", "full"]);
      }
    },
    loading: Boolean,
    disabled: Boolean,
    htmlType: {
      default: "button",
      validator(value) {
        return oneOf(value, ["button", "submit", "reset"]);
      }
    },
    icon: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      showSlot: true
    };
  },
  computed: {
    classes() {
      return [
        btnClassPrefix,
        {
          [`${btnClassPrefix}-${this.type}`]: !!this.type,
          [`${btnClassPrefix}-${this.shape}`]: !!this.shape,
          [`${btnClassPrefix}-${this.size}`]: !!this.size,
          [`${btnClassPrefix}-loading`]: this.loading != null && this.loading
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
@import "../../styles/index";
//@import "./this.scss";
</style>
