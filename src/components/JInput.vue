<template>
  <input
    type="text"
    class="
      shadow
      appearance-none
      border
      rounded
      w-full
      py-2
      px-3
      text-gray-700
      leading-tight
      focus:outline-none focus:shadow-outline
    "
    v-model="inputValue"
    @input="$emit('inputValue', inputValue)"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const inputValue = ref<string>("");
    return {
      inputValue,
    };
  },
});
</script>
