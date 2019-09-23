<template>
  <div  class="oov-rate oov-rate-custom">
    <ul class="rate-list" @mouseover="mouseoverHandle" @mouseleave="mouseleaveHandle">
      <li v-for="(item,index) of count" :key="index">
        <o-icon :type="icon" color="#f5a623" :size="iconSize"></o-icon>
      </li>
    </ul>
    <span class="rate-text">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name:'ORate',
  mode:{
    prop:'stars',
    event: 'select'
  },
  props: {
    //selected stars，v-model bind
    stars:{
      type: Number,
      default:0,
      validator: val => val >= 0
    },
    // all stars count
    count: {
      type: Number,
      default:5,
      validator: val => val >= 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'star'
    },
    iconSize: {
      type: String,
      default:'18'
    }
  },
  methods: {
    mouseoverHandle(){

    },
    mouseleaveHandle(){

    }
  }
}
</script>
<style lang="scss">
.oov-rate{
  ul.rate-list{
    list-style: none;
    li{
      display: inline-block;
      margin: 0 3px;
      cursor: pointer;
    }
  }
}
</style>