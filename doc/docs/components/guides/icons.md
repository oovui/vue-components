# Icon 图标

oovui 的图标使用vue支持的svg，基于开源的 [feather-icons](https://github.com/feathericons/feather) 进行封装。

## 兼容性支持
<br/>
支持svg的浏览器，IE9+

## 如何使用
<br/>
使用Icon组件，其中type为必须的属性：


```js
<Icon type = "x"></Icon>
<Icon type = "circle" color = "red"></Icon>
<Icon type = "airplay" color = "#323232" size = "20"></Icon>
```

<DemoCode title="基本用法" description="基本Icon用法">
  <Icon type = "x"></Icon>
  <Icon type = "circle" color = "red"></Icon>
  <Icon type = "airplay" color = "#323232" size = "20"></Icon>
  <highlight-code slot="codeText" lang="vue">
    <Icon type = "x"></Icon>
    <Icon type = "circle" color = "red"></Icon>
    <Icon type = "airplay" color = "#323232" size = "20"></Icon>
  </highlight-code>
</DemoCode>



## API

|  属性      | 说明     | 类型       | 默认值   |
|---------- | -------- |---------- |-------- |
| type    | 图标类型    |   String  |  无，必填   |
| size    | 图标大小,不带单位   |   String  |  18 （ 宽高18px）   |
| color   | 图标颜色,支持颜色值，如red   |   String  |  "#000000"   |



