# Input输入框

最基本的表单输入组件，实现原生html的`input标签`和`textarea`标签的功能

## 基本用法


单行输入框，通过`type`控制输入类型，默认type为`text`;

`value` 是绑定的值，使用`v-model`可以双向绑定。

::: demo
```html
<template>
  <div>
    <o-input v-model="msg" placeholder="请输入账号"/>
    <o-input v-model="pwd" type="password"  placeholder="请输入密码"/>
    <o-input v-model="msg" type="text" disabled placeholder="禁用状态"/>
    <o-input v-model="msg" type="text" readonly placeholder="只读状态"/>
    <span>{{msg}} {{pwd}}</span>
  </div>
</template>
<script>
export default {
  data(){
    return {
      msg:'',
      pwd:''
    }
  }
}
</script>
```
:::

