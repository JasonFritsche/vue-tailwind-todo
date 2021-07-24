<template>
  <ul class="max-w-sm mx-auto flex-col items-center justify-center">
    <li class="text-center" v-for="(item, index) in list" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const list = ref(["item one", "item two", "item three"]);

    return {
      list: list,
    };
  },
});
</script>
