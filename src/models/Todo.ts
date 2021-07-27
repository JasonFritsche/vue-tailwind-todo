import { TodoState } from "../enums/Todo";

interface ITodo {
  name: string;
  created: string;
  state: TodoState;
}

interface IValidatedTodo {
  isValid: boolean;
  message: string;
}

type TodoResponse = ITodo & IValidatedTodo;

export { ITodo, IValidatedTodo, TodoResponse };
