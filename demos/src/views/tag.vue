<template>
  <div>
    <h3>TagDemos</h3>
    <o-tag>标签一</o-tag> &nbsp;
    <o-tag v-if="show" closable @close="closeHandle">标签二</o-tag>
  </div>
</template>
<script>
export default {
  name:'TagDemo',
  data(){
    return {
      show:true
    }
  },
  methods:{
    closeHandle(e){
      console.log(e);
      this.show = false;
    }
  }
}
</script>