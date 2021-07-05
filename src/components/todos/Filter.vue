<template>
  <p class="filters">
    <span
      v-for="item in items"
      :key="item"
      @click="$emit('update:modelValue', item.value)"
      :class="{ selected: modelValue === item.value }"
      >{{ item.lable }}</span
    >
  </p>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  props: ["items", "modelValue"],
  emits: ["update:modelValue"],
});
</script>
<style scoped>
.filters > span {
  padding: 2px 4px;
  margin-right: 4px;
  border: 1px solid transparent;
  cursor: pointer;
}
.filters .selected {
  border-color: rgba(173, 47, 47, 0.2);
}
</style>