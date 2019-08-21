<template>
  <div>
    <o-select width="200" multiple v-model="selected" placeholder="请选择……"> 
      <o-option :value="1">语文</o-option>
      <o-option :value="2">数学</o-option>
      <o-option :value="3">英语</o-option>
      <o-option :value="4">科学</o-option>
      <o-option :value="5">Nodejs and Javascript</o-option>
      <o-option :value="6">Java</o-option>
    </o-select>
    <p @click="getVal">get Value</p>
  </div>
</template>
<script>
export default {
  name:'SelectDemo',
  data(){
    return {
      selected:[1,2]
    }
  },
  methods:{
    getVal(){
      console.log(this.selected)
    }
  }
}
</script>