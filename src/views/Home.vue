<template>
  <div>
    <list></list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import List from "../components/List/List.vue";
export default defineComponent({
  components: {
    List,
  },
});
</script>
