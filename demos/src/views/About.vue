<template>
  <div class="about">
    <h1>This is an about page</h1>
    <o-input v-model="msg" />
    <o-input v-model="pwd" type="password" />
    <o-input v-model="pwd" type="textarea" autosize rows="4"/>
    <o-input v-model="msg" disabled="disabled" />
    <div>{{msg}} {{pwd}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '',
      pwd: '',
    }
  },
}
</script>
