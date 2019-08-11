# Checkbox/CheckBoxGroup

Checkbox 对象代表一个 HTML 表单中的 一个选择框。

在 HTML 文档中 `<input type="checkbox">` 每出现一次，Checkbox 对象就会被创建。

::: warning
注意： 若表单提交时，checkbox未勾选，则提交的值并非为value=unchecked；此时的值不会被提交到服务器。
:::

### W3C 规范中Checkbox 对象属性
| 属性            |     描述         | 
| -------------  |:-------------| 
| disabled       | 设置或返回 checkbox 是否应被禁用。 |
| checked        | 设置或返回 checkbox 是否应被选中。 可以将该属性设置为checked="checked"，或更简单地只设置为checked。   |  
| defaultChecked | 返回 checked 属性的默认值。        |   
| form           | 返回对包含 checkbox 的表单的引用。     | 
| name           | 设置或返回 checkbox 的名称。   | 
| type           | 返回 checkbox 的表单元素类型。     | 
| value          | 设置或返回 checkbox 的 value 属性的值。如果省略，获取该元素的值的结果为字符串"on"。  | 
| tabIndex       | 设置或返回 checkbox 的 tab 键控制次序。   |
| indeterminate  | 指定checkbox处于不定状态（在大多数平台，这样会产生一个划过checkbox的横线）。|

### Vue 中的checkbox

#### 单个复选框，绑定到布尔值：
```vue
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```
`checked 为true 时选中，false 时未选中`

#### 多个复选框，绑定到同一个数组：
```vue
<div id='example-3'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
</div>

new Vue({
  el: '#example-3',
  data: {
    checkedNames: []
  }
})
```
例如,当全部选中时，`checkedNames [ "John", "Mike", "Jack" ]`

#### checkbox的值绑定
```vue
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no">
```

```js
// 当选中时
vm.toggle === 'yes'
// 当没有选中时
vm.toggle === 'no'
```
::: tip
这里的 true-value 和 false-value 特性并不会影响输入控件的 value 特性，因为浏览器在提交表单时并不会包含未被选中的复选框。如果要确保表单中这两个值中的一个能够被提交，(比如“yes”或“no”)，请换用单选按钮。
:::

## 基本用法
