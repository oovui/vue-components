# Input输入框

最基本的表单输入组件，实现原生html的`input标签`和`textarea`标签的功能

## 基本用法


单行输入框，通过`type`控制输入类型，默认type为`text`;

`value` 是绑定的值，使用`v-model`可以双向绑定。


::: demo
```html
<template>
  <o-input v-model="msg" placeholder="请输入"/>
  <o-input v-model="pwd" type="password" placeholder="请输入密码"/>
  <span> {{msg}} --- {{pwd}} </span>
</template>
<script>
export default {
  data(){
    return {
      msg:'aaaa1',
      pwd:'2222'
    }
  }
}
</script>
```
:::

## 带Icon 的输入框

通过`icon-left` 或`icon-right` 属性设置Icon，其值为Icon组件的type属性值


::: demo vue
<template>
  <o-input v-model="string" icon-left="search" placeholder="请输入"/>
  <o-input v-model="string" icon-right="warning" placeholder="请输入"/>
</template>
<script>
export default {
  data () {
    return {
      string: ''
    }
}
</script>
:::


## 可清除clearable属性

通过设置属性 `clearable` 可显示清空按钮，点击可充值已经输入的内容。


::: demo vue
<template>
  <o-input v-model="string" clearable placeholder="请输入"/>
</template>
<script>
export default {
  data () {
    return {
      string: ''
    }
}
</script>
:::

## 搜索框 search

通过设置属性 `search` 可输出常用的搜索输入框


::: demo vue
<template>
  <o-input v-model="string" search placeholder="请输入"/>
  <o-input v-model="string" search placeholder="请输入"/>
  <o-input v-model="string" search placeholder="请输入"/>
</template>
<script>
export default {
  data () {
    return {
      string: ''
    }
}
</script>
:::

## 前置/后置标签

设置 `slot="prepend"` 或者 `slot="append"` ，可自定义复合型输入框

slot 属性对标签有一定要求，目前支持`span`、`select` 和 `button`三种标签。

其他标签或组件的可能造成样式错乱。


::: demo vue
<template>
  <o-input v-model="string"  placeholder="请输入">
      <span slot="prepend">http://</span>
      <span slot="append">.com</span>
  </o-input>
 <o-input v-model="string"  placeholder="请输入">
      <o-select v-model="select1" slot="prepend" style="width: 80px">
          <o-option value="http">http://</o-option>
          <o-option value="https">https://</o-option>
        </o-select>
        <o-select v-model="select2" slot="append" style="width: 70px">
            <o-option value="com">.com</o-option>
            <o-option value="org">.org</o-option>
            <o-option value="io">.io</o-option>
        </o-select>
  </o-input>
  <o-input v-model="string"  placeholder="请输入">
      <o-select v-model="select3" slot="prepend" style="width: 80px">
          <o-option value="day">Day</o-option>
          <o-option value="month">Month</o-option>
      </o-select>
      <o-button slot="append" icon="ios-search"></o-button>
  </o-input>
</template>
<script>
export default {
  data () {
    return {
      string: ''
    }
}
</script>
:::


## 禁用/只读
设置 `readonly` 和 `disabled` 属性

::: demo vue
<template>
  <o-input v-model="string" readonly placeholder="请输入"/>
  <o-input v-model="string" disabled placeholder="请输入"/>
</template>
<script>
export default {
  data () {
    return {
      string: ''
    }
}
</script>
:::

## 文本域Textarea

通过设置属性 type 为 `textarea` 来使用文本域，用于多行输入。

可以设置属性 `autosize`，文本域会自动适应高度的变化。

::: demo vue
<template>
  <o-input v-model="string" type="textarea"  placeholder="请输入"/>
  <o-input v-model="string"  type="textarea"  autosize placeholder="请输入"/>
</template>
<script>
export default {
  data () {
    return {
      string: ''
    }
}
</script>
:::