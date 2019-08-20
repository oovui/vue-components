<template>
  <div>
    Child: {{ childText.text }}
  </div>
</template>
<script>
export default {
  name:'ChildDemo',
  inject:['praProvide'],
  data(){
    return { 
      childText: this.praProvide
    }   
  },
  mounted(){
    setTimeout(()=>{
      this.praProvide.text = 'child Change'
      //this.childText.text = 'child Change'
		},2000)
  } 
}
</script>