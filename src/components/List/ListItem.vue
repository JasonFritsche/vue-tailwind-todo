<template>
  <div
    class="
      flex
      h-10
      bg-indigo-900
      p-2
      my-2
      shadow-md
      text-pink-50
      justify-center
      hover:bg-indigo-800 hover:shadow-2xl
      cursor-pointer
      border border-indigo-300
      hover:border-indigo-100
    "
  >
    {{ item.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITodo } from "../../models/Todo";
export default defineComponent({
  props: {
    item: {
      type: Object as PropType<ITodo>,
      required: true,
    },
  },
  setup() {},
});
</script>
