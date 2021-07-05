<template>
  <ul>
    <li :class="{ completed: todo.complete, editing: todo === editedTodo }">
      <!-- 绑定完成状态 -->
      <div class="view">
        <input type="checkbox" v-model="todo.complete" />
        <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
        <button @click="removeTodo(todo)">X</button>
      </div>
      <!-- <input
          type="text"
          
        /> -->
      <EditTodos
        class="edit"
        v-model:todoTitle="todo.title"
        v-todo-focus="todo === editedTodo"
        @blur="doneEdit(todo)"
        @keyup.enter="doneEdit(todo)"
        @keyup.escape="cancelEdit(todo)"
      ></EditTodos>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "App",
  props: {
    todo: {
      type: Object,
      require: true,
    },
    editedTodo: Object,
  },
  emits: ["removeTodo", "update:editedTodo"],
  setup(props, { emit }) {
    const state = reactive({
      beforeEditCache: "",
    });
    const funList = {
      removeTodo: (todo: any) => {
        emit("removeTodo", todo);
      },
      editTodo: (todo: any) => {
        state.beforeEditCache = todo.title;
        emit("update:editedTodo", todo);
      },
      cancelEdit: (todo: any) => {
        todo.title = state.beforeEditCache;
        emit("update:editedTodo", null);
      },
      doneEdit: (todo: any) => {
        emit("update:editedTodo", null);
      },
    };
    return {
      ...toRefs(state),
      ...funList,
    };
  },
  directives: {
    "todo-focus": (el, { value }) => {
      if (value) el.focus();
    },
  },
});
</script>
<style scoped>
.completed label {
  text-decoration: line-through;
}
.edit,
.editing .view {
  display: none;
}
.view,
.editing .edit {
  display: block;
}
</style>