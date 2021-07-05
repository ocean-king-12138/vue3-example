<template>
  <div>
    <button @click="modelOpen = true">弹出模拟窗口</button>
    <teleport to="body">
      <div v-if="modelOpen" class="model">
        <div>
          这是一个弹窗
          <button @click="modelOpen = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    //const modelOpen = ref(true);
    return {
      modelOpen: ref(true),
    };
  },
});
</script>
<style scoped>
.model {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.model div {
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>