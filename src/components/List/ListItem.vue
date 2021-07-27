<template>
  <div
    class="
      flex
      justify-between
      h-10
      bg-indigo-900
      p-2
      my-2
      shadow-md
      text-pink-50
      hover:bg-indigo-800 hover:shadow-2xl
      cursor-pointer
      border border-indigo-300
      hover:border-indigo-100
    "
  >
    <div class="justify-self-start">{{ item.name }}</div>
    <div>{{ item.created }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITodo } from "../../models/Todo";
export default defineComponent({
  setup(props) {},
  props: {
    item: {
      type: Object as PropType<ITodo>,
      required: true,
    },
  },
});
</script>
