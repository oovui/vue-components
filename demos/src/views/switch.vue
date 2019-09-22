<template>
  <div>
    <o-switch @change="switchChanged" v-model="switchModel"  :disabled="disabled">
    </o-switch>
    <o-switch @change="switchChanged" v-model="switchModel" :disabled="disabled">
      <template v-slot:open>是</template>
      <template v-slot:close>否</template>
    </o-switch>
    <o-switch @change="switchChanged" v-model="switchModel" :disabled="disabled">
      <template v-slot:open> <o-icon type="check" color="#fff"/> </template>
      <template v-slot:close> <o-icon type="x" color="grey"/> </template>
    </o-switch>

    <p>
      <button style="padding:2px 6px;margin-top:20px" @click="disabled=!disabled">disabled</button>
    </p>
  </div>
</template>
<script>
export default {
  name:'SwitchDemo',
  data(){
    return {
      switchModel:false,
      disabled:false
    }
  },
  methods:{
    switchChanged(val){
      console.log("demos switchChanged",val)
    }
  }
}
</script>