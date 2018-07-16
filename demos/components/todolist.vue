<template>
  <div class="todolist">
    <ul>
      <li
        v-for="todo in todos"
        v-bind:key="todo.id"
      >
        <!-- 我们为每个 todo 准备了一个插槽，-->
        <!-- 将 `todo` 对象作为一个插槽的 prop 传入。-->
        <slot v-bind:todo="todo" name="democode">
          <!-- 回退的内容 -->
          {{ todo.text }}
        </slot>

        {{ todo.text }}
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'todolist',
  data(){
    return{
      
    }
  },
  props:['todos']
}
</script>