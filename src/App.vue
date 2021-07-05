<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <p>{{ data.counter }}</p>
  <p>{{ data.doubleCounter }}</p>
  <p ref="desc"></p>
  <div id="demo"></div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";
import HelloWorld from "./components/HelloWorld.vue";
function useCounter() {
  const data: any = reactive({
    counter: 1,
    doubleCounter: computed(() => data.counter * 2),
  });
  let timer: any;
  onMounted(() => {
    timer = setInterval(() => {
      data.counter++;
    }, 1000);
  });
  onUnmounted(() => {
    clearInterval(timer);
  });
  return data;
}
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },

  setup() {
    //counter 相关
    //const { counter, doubleCounter } = useCounter();
    const data = useCounter();
    //other
    const msg = ref("some message");
    const desc = ref(null);
    console.log(typeof data.counter);
    watch(
      () => data.counter,
      (val, oldVal) => {
        const p: any = desc.value;
        p.textContent = `counter change from ${oldVal} to ${val}`;
      }
    );

    return { data, desc };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
