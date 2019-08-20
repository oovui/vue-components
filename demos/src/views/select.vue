<template>
  <div>
    <o-select width="200" v-model="selected" placeholder="请选择……"> 
      <o-option value="1">语文</o-option>
      <o-option value="2">数学</o-option>
    </o-select>
    <p @click="getVal">get Value</p>
  </div>
</template>
<script>
export default {
  name:'SelectDemo',
  data(){
    return {
      selected:2
    }
  },
  methods:{
    getVal(){
      console.log(this.selected)
    }
  }
}
</script>