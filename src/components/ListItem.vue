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
    {{ item }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    item: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>
