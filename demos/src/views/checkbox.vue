<template>
  <div>
    <h3>单个checkbox的使用，默认值为true/false</h3>
    <o-checkbox v-model="selected" >是否选中</o-checkbox>
    <p>取值：{{selected}}</p>
    <h3> checkbox组,v-model 为数组</h3>
    <o-checkbox v-model="likes" value="语文">语文</o-checkbox>
    <o-checkbox v-model="likes" value="数学">数学</o-checkbox>
    <o-checkbox v-model="likes" value="英语">英语</o-checkbox>
    <p>取值：{{likes}}</p>

    <h3> 在o-checkbox-group中使用,v-model 为数组</h3>
    <o-checkbox-group v-model="courses">
      <o-checkbox value="Java">Java</o-checkbox>
      <o-checkbox value="Node">Node</o-checkbox>
      <o-checkbox value="Pyton">Python</o-checkbox>
    </o-checkbox-group>
    <p>取值：{{courses}}</p>

  </div>
</template>
<script>
export default {
  name: 'CheckboxDemo',
  data() {
    return {
      selected:true,
      likes:['语文'],
      courses:['Node']
    }
  }
}
</script>
