# Select选择框

::: tip

HTML 中 `<select>` 元素表示一个控件，提供一个选项菜单。

菜单内的选项为`<option>` , 可以由 `<optgroup>` 元素分组。选项可以被用户预先选择。

类似的也可以在`<datalist>`元素包含了一组`<option>`元素，实现同样的功能。

:::

## 原生HTML select 示例


::: demo [vanilla]
```html
<html>
<label for="pet-select">Choose a pet:</label>
<select id="pet-select" >
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat" selected>Cat</option>
    <option value="hamster" disabled>Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
    <optgroup label="第一组">
      <option>Option 1.1</option>
      <option disabled>Option 1.2</option>
    </optgroup>
    <optgroup label="第二组" disabled>
      <option value="1">Option 2.1</option>
      <option value="1">Option 2.2</option>
    </optgroup>
</select>
</html>
<script>
var selectEl = document.getElementById('pet-select');
selectEl.addEventListener('change',function(e){
  alert(e.target.value);
})
</script>
```
:::

::: demo [vanilla]
```html
<html>
<select form="myForm" required>
  <option value="">请选择</option>
  <option value="volvo" >Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
<form id="myForm" style="margin-top:20px">
	<input type="submit" value=" 提交 "/>
</from>
<p>点击 提交 按钮，如果没有选择，禁止提交</p>
</html>
```
:::


::: demo [vanilla]
```html
<html>
<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />
<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>
</html>
```
:::

## 原生 select 元素属性
| 属性            |     描述         | 
| -------------  |:-------------| 
| autocomplete     | DOMString 提供用户代理自动完成功能的提示。 |
| autofocus        | 这个属性能够让一个对象在页面加载的时候获得焦点. 在一个页面上下文中, 只有一个对象可以有这个属性，并且是布尔值(true 或者 false).   |  
| disabled | 这个布尔值的属性表明一个用户是否可以操控该表单对象. 如果这个属性没有被明确定义, 则从它的父元素继承,      |   
| form           |select所关联的form表单 (它的"表单拥有者"). 如果这个属性被明确定义, 那么它的值一定是在同一个document中表单ID.     | 
| multiple           | 这个布尔值的属性标记select是否可以多选. 默认是单选.  | 
| required           | 规定select的值不能为空(布尔值).    | 

## 原生 option 元素属性
| 属性            |     描述         | 
| -------------  |:-------------| 
| disabled     |  如果设置了这个布尔属性，选项就不是可选的。浏览器通常会将这种控件显示为灰色，并且不再接受任何浏览器事件，例如鼠标点击或者焦点相关的事件。如果这个属性没有设置，如果元素的祖先是禁用的 `<optgroup>` 元素，元素仍然是禁用的 。 |
| label        | 这个属性是用于表示选项含义的文本。如果 label 属性没有定义，它的值就是元素文本内容。 |  
| selected     | 如果存在, 则这个布尔属性表明，这个选项初始被选中。如果 `<option>` 元素是 `<select>`元素的后继，并且它的 multiple 属性没有设置，这个 `<select>` 元素只有一个 `<option>` 元素可以拥有 selected 属性。   |   
| value        |这个属性的内容代表这个选项选中的话，提交给表单的值。如果省略了这个属性，值就从选项元素的文本内容中获取。   | 

## Vue 中的select
::: demo 
```html
<template>
<div class="example">
  <p>单选时：绑定到字符串: </p>
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>

  <p style="margin-top:10px">多选时 (绑定到一个数组)：</p>
   <select v-model="selecteds" multiple style="width: 50px;">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br>
  <span>Selected: {{ selecteds }}</span>

  <p style="margin-top:10px">用 v-for 渲染的动态选项:</p>

  <select v-model="selecteds1">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selecteds1 }}</span>


</div>
</template>
<script>
export default {
  data(){
    return {
      selected:'',
      selecteds:[ ],
      selecteds1:'B',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  }
}
</script>
```
:::

::: tip
如果 v-model 表达式的初始值未能匹配任何选项，`<select>` 元素将被渲染为“未选中”状态。

在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。

因此，更推荐像上面这样提供一个值为空的禁用选项。
:::