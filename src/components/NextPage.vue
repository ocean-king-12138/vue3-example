<template>
  <div>这是一个异步组件</div>
</template>
<script lang="ts">
import { emitter } from "./HelloWorld.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  mounted() {
    emitter.on("someMsg", (msg) => {
      console.log(msg);
    });
  },
});
</script>