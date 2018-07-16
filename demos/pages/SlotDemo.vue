<template>
  <div>
    <h3>slot demo</h3>
    <nameslot>
      <div slot="header" style="color:red">
          我是header插槽的内容
      </div>
          我是没有名字的插槽内容！
      <div slot="footer" style="color:blue">
          我是footer插槽的内容
      </div>
    </nameslot>

    <hr style="margin-top:10px"/>

    <todolist v-bind:todos="todos">
       <!-- 将 `slotProps` 定义为插槽作用域的名字 -->
      <div slot-scope="slotProps" slot="democode">
        <!-- 为待办项自定义一个模板，-->
        <!-- 通过 `slotProps` 定制每个待办项。-->
        <span v-if="slotProps.todo.isComplete">✓</span>
        {{ slotProps.todo.text }}
      </div>
    </todolist>
  </div>
</template>
<script>

import nameslot from '../components/nameslot.vue';
import todolist from '../components/todolist.vue';

export default {
  name:'SlotDemo',
  data(){
    return{
     todos:[
        {
          id:1,
          text:'study js',
          isComplete: true
        },{
          id:2,
          text:'study java',
          isComplete: false
        }
      ]
    }
  },
  components:{
   nameslot,
   todolist
  }
}
</script>

