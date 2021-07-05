<template>
  <div @click="$emit('my-click')">自定义事件</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  emits: ["my-click"],
});
</script>