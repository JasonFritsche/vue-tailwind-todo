<template>
  <button
    class="
      inline-block
      text-center
      bg-indigo-700
      hover:bg-indigo-800
      text-white
      font-bold
      py-2
      px-4
      rounded
      focus:outline-none focus:shadow-outline
    "
  >
    <slot>
      <p>hello</p>
    </slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
