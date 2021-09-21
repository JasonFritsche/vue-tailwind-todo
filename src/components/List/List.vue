<template>
  <div class="container w-2/3 mx-auto grid grid-cols-1">
    <add-item @new-todo="addTodo"></add-item>
    <ul class="grid grid-cols-1">
      <li class="h-10 my-1" v-for="(item, index) in state.list" :key="index">
        <list-item :item="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import ListItem from "../List/ListItem.vue";
import AddItem from "./AddItem.vue";
import { ITodo, TodoResponse } from "../../models/Todo";
import { useToast } from "vue-toastification";

export default defineComponent({
  components: { ListItem, AddItem },
  setup() {
    const toast = useToast();
    // const list = ref<Array<ITodo>>([]);
    const state = reactive({
      list: <Array<ITodo>>[],
    });
    const addTodo = (todo: TodoResponse) => {
      if (todo.isValid) {
        state.list = [...state.list, todo];
        toast.success(todo.message, {
          timeout: 2000,
        });
      } else if (!todo.isValid) {
        toast.error(todo.message), { timeout: 2000 };
      }
    };
    return {
      state,
      addTodo,
      toast,
    };
  },
});
</script>
