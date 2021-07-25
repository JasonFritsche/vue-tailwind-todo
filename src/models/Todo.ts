import { TodoState } from "../enums/Todo";

interface ITodo {
  name: string;
  created: Date;
  state: TodoState;
}

export { ITodo };
