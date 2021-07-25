<template>
  <div class="container w-2/3 mx-auto grid grid-cols-1">
    <add-item @new-todo="addTodo"></add-item>
    <ul class="grid grid-cols-1">
      <li class="h-10 my-1" v-for="(item, index) in list" :key="index">
        <list-item :item="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ListItem from "../List/ListItem.vue";
import AddItem from "./AddItem.vue";
import { ITodo } from "../../models/Todo";
export default defineComponent({
  components: { ListItem, AddItem },
  setup() {
    const list = ref<Array<ITodo>>([]);
    const addTodo = (todo: ITodo) => list.value.push(todo);
    return {
      list,
      addTodo,
    };
  },
});
</script>
