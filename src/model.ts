import { Dispatch, FormEventHandler, SetStateAction } from "react";

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export type SetActive = (e: React.MouseEvent<HTMLButtonElement>) => void;
export type SetCompleted = (e: React.MouseEvent<HTMLButtonElement>)=> void;
export type SetAll = (e: React.MouseEvent<HTMLButtonElement>)=>void;
export type AddItem = FormEventHandler<HTMLFormElement>;
export type SetTodo = (e: SetStateAction<string>)=>void;
export type ToDo = string;

export type TodoContextType = {
  todos: any;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  filter: any;
  setActive: SetActive;
  setCompleted: SetCompleted;
  setAll: SetAll;
  addItem: AddItem;
  clear: () => void;
  setTodo: SetTodo;
  todo: ToDo;
};
