<template>
  <div>
    <j-header title="Awesome List" />
    <list></list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import List from "../components/List/List.vue";
import JHeader from "../components/JHeader.vue";
export default defineComponent({
  components: {
    List,
    JHeader,
  },
});
</script>
