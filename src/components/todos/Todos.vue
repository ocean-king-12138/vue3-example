<template>
  <div>
    <!-- 新增 -->
    <EditTodos
      v-model:todoTitle="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增代办"
      autocomplete="false"
    ></EditTodos>
    <!-- todo列表 -->
    <TodoItem
      v-for="todo in filiterTodos"
      :key="todo.id"
      :todo="todo"
      v-model:editedTodo="editedTodo"
      @removeTodo="removeTodo"
    ></TodoItem>
    <Filter :items="filterItems" v-model="visibility"></Filter>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
import TodoItem from "./TodoItem.vue";
import Filter from "./Filter.vue";
import { useTodos } from "./useTodos.js";
import { useFilter } from "./useFilter.js";

export default defineComponent({
  name: "App",
  components: { TodoItem, Filter },
  setup() {
    const todoState = reactive({
      newTodo: "",
      editedTodo: null,
    });
    const { todos, removeTodo, addTodo } = useTodos(todoState);
    //@ts-ignore
    const filterState = useFilter(todos);
    return {
      todos,
      removeTodo,
      addTodo,
      ...toRefs(todoState),
      ...toRefs(filterState),
    };
  },
});
</script>
<style scoped>
</style>