<template>
  <div id="demo">
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  data() {
    return {
      show: true,
    };
  },
});
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-enter-to {
  opacity: 0;
}
</style>