<template lang="html">
  <div id="app">
    <h1 class="top">vueui demo</h1>
    <hr/>
    <div class="content-wrap">
        <div class="left-nav">
          <h4>组件DEMO</h4>
          <hr/>
          <router-link to="/">Home</router-link>
          <router-link :to="menu.to" v-for="menu of menus" :key="menu.name">
            {{menu.name}}
          </router-link>
          <hr/>
          <h4>测试DEMO</h4>
          <hr/>
          <router-link :to="menu.to" v-for="menu of menusTest" :key="menu.name">
            {{menu.name}}
          </router-link>
        </div>
        <div class ="right-demos">
          <router-view></router-view>
        </div>
    </div>
  </div>
</template>
<script>
import { menus, menusTest } from './menus'
export default {
  name: 'app',
  data() {
    return {
      menus,
      menusTest,
    }
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  height: 100%;
}

#app {
  height: 100%;
}

h1.top {
  height: 60px;
  line-height: 60px;
  background: #e5f6e7;
  padding-left: 20px;
  margin: 0 !important;
}
.content-wrap {
  display: table;
  width: 100%;
  height: 100%;
}
.left-nav,
.right-demos {
  display: table-cell;
  vertical-align: top;
}

.left-nav {
  width: 18%;
  background: #e4f5ef;
  a {
    display: block;
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
  }
}

.right-demos {
  width: 80%;
  padding: 20px;
}
</style>
