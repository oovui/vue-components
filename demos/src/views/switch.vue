<template>
  <div>
    <o-switch @change="switchChanged" v-model="switchModel" >
      <template v-slot:open>是</template>
      <template v-slot:close>否</template>
    </o-switch>
  </div>
</template>
<script>
export default {
  name:'SwitchDemo',
  data(){
    return {
      switchModel:false,
      slots:{
        open:'开',
        close:'关'
      }
    }
  },
  methods:{
    switchChanged(val){
      console.log("demos switchChanged",val)
    }
  }
}
</script>