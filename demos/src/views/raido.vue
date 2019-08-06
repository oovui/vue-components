<template>
  <div>
    <div>性别</div>
    <o-radio v-model="sex" value="男">男</o-radio>
    <o-radio v-model="sex" value="女">女</o-radio>
    <button @click="getSex">获取当前值</button>
    <br />
    <div class="mt10">爱好</div>
    <o-radio v-model="favorite" value="football">足球</o-radio>
    <o-radio v-model="favorite" value="basketball">篮球</o-radio>
    <o-radio v-model="favorite" value="music">音乐</o-radio>
    <button @click="getFavorite">获取当前值</button>
    <br />
    <div class="mt10">O-Radio—Group 分组中使用Radio</div>
    <div>选项课程</div>
    <o-radio-group v-model="course" style="display:inline-block" @change="selectChange">
      <o-radio :value="1">Nodejs</o-radio>
      <o-radio :value="2">Java</o-radio>
      <o-radio :value="3">Python</o-radio>
    </o-radio-group>
    <button @click="getCourse">获取当前值</button>
  </div>
</template>
<script>
export default {
  name: 'RadioDemo',
  data() {
    return {
      sex: '男',
      favorite: '',
      course: '1',
    }
  },
  methods: {
    getSex() {
      alert(this.sex)
    },
    getFavorite() {
      alert(this.favorite)
    },
    getCourse() {
      alert(this.course)
    },
    selectChange(val){
      console.log("值改变了，当前最新的值为:" + val);
    }
  },
  watch: {
    favorite(val) {
      console.log(val)
    },
  }
}
</script>


