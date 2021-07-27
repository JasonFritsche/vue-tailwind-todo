<template>
  <div class="flex flex-row my-3">
    <j-input v-model="todoName"></j-input>
    <j-button @click="addTodo()" class="ml-1 whitespace-nowrap">
      <p>Add Item</p>
    </j-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import JButton from "../JButton.vue";
import JInput from "../JInput.vue";
import { ITodo, IValidatedTodo, TodoResponse } from "../../models/Todo";
import { TodoState } from "../../enums/Todo";

const validateTodo = (todo: Pick<ITodo, "name">): IValidatedTodo => {
  if (todo.name && todo.name.length > 0) {
    // valid, has value
    return <IValidatedTodo>{
      isValid: true,
      message: `${todo.name} has been added to your list`,
    };
  } else {
    // invalid, has no value
    return <IValidatedTodo>{
      isValid: false,
      message: "Please input a value and try again",
    };
  }
};

export default defineComponent({
  components: {
    JButton,
    JInput,
  },
  setup(_, context) {
    const todoName = ref<string>("");
    const addTodo = () => {
      const newTodo: ITodo = {
        name: todoName.value,
        created: new Date().toLocaleString(),
        state: TodoState.active,
      };
      const isValid = validateTodo(newTodo);
      const todoRes: TodoResponse = { ...newTodo, ...isValid };
      context.emit("newTodo", todoRes);
    };
    return {
      todoName,
      addTodo,
    };
  },
});
</script>
