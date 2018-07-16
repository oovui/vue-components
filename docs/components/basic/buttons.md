# Button 组件

Button 组件用于生成一个原生的button标签。

## 按钮类型
按钮类型有6种：

默认按钮(`default`), 品牌按钮(`primary`),信息按钮(`info`),成功按钮(`success`),警告按钮(`warning`),危险或错误按钮(`danger/error`).


<DemoCode title="" description="">
  <OButton>Default</OButton>
  <OButton type="primary">Primary</OButton>
  <OButton type="info">Info</OButton>
  <OButton type="success">Success</OButton>
  <OButton type="warning">Warning</OButton>
  <OButton type="danger">Danger</OButton>
  <highlight-code slot="codeText" lang="vue">
    <OButton>Default</OButton>
    <OButton type="primary">Primary</OButton>
    <OButton type="info">Info</OButton>
    <OButton type="success">Success</OButton>
    <OButton type="warning">Warning</OButton>
    <OButton type="danger">Danger</OButton>
  </highlight-code>
</DemoCode>

## 图标及形状

当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。

如果想控制 Icon 具体的位置（默认在左边），只能直接使用 Icon 组件，而非 icon 属性。

按钮形状：
通过设置shape属性为circle，可将按钮置为圆的形状。

<DemoCode title="" description="">

  <OButton type="primary" icon="search" shape="circle"></OButton>
  <OButton type="primary" shape="rectangle">Search</OButton>
  <OButton type="primary" icon="search">Search</OButton>
  <OButton type="primary">Search <Icon type="search"></Icon></OButton>
  
  <highlight-code slot="codeText" lang="vue">
     <OButton type="primary" icon="search" shape="circle"></OButton>
     <OButton type="primary" shape="rectangle">Search</OButton>
     <OButton type="primary" icon="search">Search</OButton>
     <OButton type="primary">Search <Icon type="search"></Icon></OButton>
  </highlight-code>
</DemoCode>


## 按钮尺寸

按钮有大、中、小及全屏四种尺寸：
通过设置 size 为 large, small,full 分别把按钮设为大、小、全屏尺寸。若不设置 size，则尺寸默认为中。

<DemoCode title="" description="">
  <OButton type="primary" size="large">Large</OButton>
  <OButton type="primary">Default</OButton>
  <OButton type="primary" size="small">small</OButton>
  
  <highlight-code slot="codeText" lang="vue">
    <OButton type="primary" size="large">Large</OButton>
    <OButton type="primary">Default</OButton>
    <OButton type="primary" size="small">small</OButton>

  </highlight-code>
</DemoCode>

<DemoCode title="" description="">
 
  <OButton type="primary" size="full">Submit</OButton>
  <highlight-code slot="codeText" lang="vue">
    <OButton type="primary" size="full">Submit</OButton>
  </highlight-code>
</DemoCode>


## 按钮状态：不可用
添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

<DemoCode title="" description="">
  <OButton disabled>Default</OButton>
  <OButton  type="primary" disabled>Primary</OButton>
  <OButton type="info" disabled>Info</OButton>
  <OButton type="success" disabled>Success</OButton>
  <OButton type="warning" disabled>Warning</OButton>
  <OButton type="danger" disabled>Danger</OButton>
  <highlight-code slot="codeText" lang="vue">
    <OButton disabled>Default</OButton>
    <OButton type="primary" disabled>Primary</OButton>
    <OButton type="info" disabled>Info</OButton>
    <OButton type="success" disabled>Success</OButton>
    <OButton type="warning" disabled>Warning</OButton>
    <OButton type="danger" disabled>Danger</OButton>
  </highlight-code>
</DemoCode>

## 按钮状态：加载中
添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

<DemoCode title="" description="">
 
  <OButton type="primary" loading>Submit</OButton>
  <highlight-code slot="codeText" lang="vue">
    <OButton type="primary" loading>Loading…</OButton>
  </highlight-code>
</DemoCode>

## 按钮组合

`oovui1.1`支持

<DemoBlock>
  <OButton type="primary" loading>Loading…</OButton>
</DemoBlock>

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -> shape -> size -> loading -> disabled
按钮的属性说明如下：

| 属性          | 说明                    | 类型   | 默认值  |
| ------------- | :---------------------: | :----: | ------: |
| type          | 设置按钮类型，可选值为: | String | default |
| col 2 is      | centered                | $12    |
| zebra stripes | are neat                | $1     |



