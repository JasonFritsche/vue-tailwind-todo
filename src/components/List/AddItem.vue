<template>
  <div class="flex flex-row my-3">
    <j-input v-model="todoName"></j-input>
    <j-button
      @click="this.$emit('new-todo', addTodo())"
      class="ml-1 whitespace-nowrap"
    >
      <p>Add Item</p>
    </j-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import JButton from "../JButton.vue";
import JInput from "../JInput.vue";
import { ITodo } from "../../models/Todo";
import { TodoState } from "../../enums/Todo";
export default defineComponent({
  components: {
    JButton,
    JInput,
  },
  setup() {
    const todoName = ref<string>("");
    const addTodo = () => {
      return <ITodo>{
        name: todoName.value,
        created: new Date(),
        state: TodoState.active,
      };
    };
    return {
      todoName,
      addTodo,
    };
  },
});
</script>
