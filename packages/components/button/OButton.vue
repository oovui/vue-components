<template>
  <button>我是一个: {{name}}</button>
</template>

<script>
export default {
  name:'OButton',
  data() {
    return { name: 'Button' }
  }
}
</script>

<style lang="scss">
//base
@import "../../styles/index";
@import "./this.scss";
</style>
