<template>
  <input
    type="text"
    :value="todoTitle"
    @input="onInputChange"
    v-bind="$attrs"
  />
  <!-- @keyup.enter="addTodo"
    autofocus
    placeholder="新增代办"
    autocomplete="false" -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  props: {
    todoTitle: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInputChange(e: any) {
      this.$emit("update:todoTitle", e.target.value);
    },
  },
});
</script>