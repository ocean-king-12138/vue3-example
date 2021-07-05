<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <model-button></model-button>
  <Emits @my-click="onClick"></Emits>
  <!-- 实例方法定义组件 -->
  <comp></comp>
  <!-- v-model使用 -->
  <VModelTest v-model:counter="counter"></VModelTest>

  <RenderTest v-model:counter="counter">
    <template v-slot:default>xxx</template>
    <template v-slot:title>content</template>
  </RenderTest>
  <Fuctional level="1">这是一个函数式组件</Fuctional>
  <AsyncComp></AsyncComp>
  <!-- 动画 -->
  <TransitionTest></TransitionTest>
  <Todos></Todos>
  <button @click="sendMsg">mitt</button>
</template>
<script lang="ts">
import {
  ref,
  defineComponent,
  onMounted,
  computed,
  watch,
  h,
  defineAsyncComponent,
} from "vue";
//时间的派和更新
import mitt from "mitt";
import ModelButton from "../components/ModelButton.vue";
import VModelTest from "../components/VModelTest.vue";
import TransitionTest from "../components/TransitionTest.vue";
import Emits from "../components/Emits.vue";
import Fuctional from "../components/Fuctional.vue";
import Todos from "../components/todos/Todos.vue";
export const emitter = mitt();
export default defineComponent({
  components: {
    ModelButton,
    Todos,
    Emits,
    VModelTest,
    Fuctional,
    RenderTest: {
      props: {
        counter: {
          type: Number,
          default: 0,
        },
      },
      methods: {
        onClick() {
          this.$emit("update:counter", this.counter + 1);
        },
      },
      render() {
        this.$slots.title();
        return h("div", [
          h(
            "div",
            {
              onClick: this.onClick,
            },
            [`I am RenderTest:${this.counter}`, this.$slots.title()]
          ),
        ]);
      },
    },
    AsyncComp: defineAsyncComponent(() => import("./NextPage.vue")),
    TransitionTest,
  },
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    sendMsg() {
      emitter.emit("someMsg", "foooo");
    },
  },
  setup() {
    const count = ref(0);
    const onClick = () => {
      console.log("click");
    };
    let counter = ref(1);
    // const val = computed(() => {
    //   return counter.value + 1;
    // });

    // watch(counter, () => {
    //   console.log(counter);
    // });
    //let counter = ref(1);
    return { count, onClick };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
