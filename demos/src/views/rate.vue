<template>
  <div>
    <o-rate icon-size="20" v-model="curStar" @change="starChanged"></o-rate>
  </div>
</template>
<script>
export default {
  name: 'RateDemo',
  data() {
    return {
      curStar: 3,
    }
  },
  methods: {
    starChanged(val) {
      console.log('demos->onchange:', val)
    },
  },
}
</script>
