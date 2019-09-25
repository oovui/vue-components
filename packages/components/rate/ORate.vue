<template>
  <div  class="oov-rate oov-rate-custom">
    <ul class="rate-list" @mouseover="mouseoverHandle" @mouseleave="mouseleaveHandle">
      <li v-for="(item,index) of count" :key="index"  @click="rateConfirm(index)"  @mousemove="moveStarHandle(index, $event)">
        <o-icon :type="icon" color="#f5a623" :size="iconSize"></o-icon>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'ORate',
  model:{
    prop:'stars',
    event: 'select'
  },
  data(){
    return {
      currentValue:this.stars,
      isHalf: this.allowHalf,
      hoverIndex: -1,
    }
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

    },
    moveStarHandle(index, event){
      if (this.disabled) return
      this.hoverIndex = index
      if (this.allowHalf && event.target.getAttribute('type') === 'half') {
        this.isHalf = true
      } else {
        this.isHalf = false
      }
      // emit hover-change event
      const exactlyHoverIndex = this.isHalf ? index - 0.5 : index
      if (exactlyHoverIndex !== this.lastHoverIndex) {
        this.$emit('on-hover-change', exactlyHoverIndex)
      }
      this.lastHoverIndex = exactlyHoverIndex
    },
    rateConfirm(index){
      console.log("rateConfirm");
      if (this.disabled) return
      this.currentValue = this.isHalf ? index - 0.5 : index
      console.log("rateConfirm",this.currentValue)
      this.$emit('change', this.currentValue)
      //v-model
      this.$emit('select', this.currentValue)
    }
  },
  mounted(){
    console.log("currentStar:",this.currentValue);
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