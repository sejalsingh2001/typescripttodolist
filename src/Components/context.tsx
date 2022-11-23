import { createContext, useState } from "react";
import { Todo, TodoContextType, SetActive, SetCompleted, SetAll, AddItem } from "../model";

import React from "react";
import { Filter } from "./Todo";

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
  filter: [],
  setActive: () => {},
  setCompleted: ()=>{},
  setAll: ()=>{},
  addItem: ()=>{},
  clear: () => {},
  setTodo: ()=>{},
  todo:"",
});

const Context: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [todo, setTodo] = useState<string>("");
const [todos, setTodos] = useState<Todo[]>([]);
const [filtertext, setFilterText] = useState<Filter>("All");

const filter = todos.filter((todo) => {
  if (filtertext === "Active") {
    return todo.isCompleted === false;
  } else if (filtertext === "Completed") {
    return todo.isCompleted === true;
  } else {
    return todos;
  }
});

const setActive: SetActive = (e) => {
  e.preventDefault();
  setFilterText("Active");
};
const setCompleted: SetCompleted= (e) => {
  e.preventDefault();
  setFilterText("Completed");
};

const setAll:SetAll = (e) => {
  setFilterText("All");
};
const clear = () => {
  const set = todos.filter((todo) => todo.isCompleted === false);
  setTodos(set);
};

const addItem : AddItem = (e: React.FormEvent) => {
  e.preventDefault();
  if (todo) {
    setTodos([
      ...todos,
      {
        id: Math.round(Math.random() * 100),
        todo: todo,
        isCompleted: false,
      },
    ]);
    setTodo("");
  }
}

  return <TodoContext.Provider value={{todos,setTodos,filter, setActive,setCompleted, setAll,addItem,clear,setTodo,todo}}>{children}</TodoContext.Provider>;
};

export default Context;
