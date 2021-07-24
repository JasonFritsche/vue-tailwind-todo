<template>
  <ul class="grid grid-cols-1 justify-items-center">
    <li class="w-2/3 h-10 my-1" v-for="(item, index) in list" :key="index">
      <list-item :item="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ListItem from "./ListItem.vue";
export default defineComponent({
  components: { ListItem },
  setup() {
    const list = ref<Array<string>>(["item one", "item two", "item three"]);

    return {
      list: list,
    };
  },
});
</script>
