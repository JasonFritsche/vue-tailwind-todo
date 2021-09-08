<template>
  <div class="w-full opacity-90 p-5 bg-gray-700 hover:opacity-80 mb-3">
    <h1 class="text-center font-mono font-semibold text-blue-100">
      {{ title }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: String,
  },
});
</script>
