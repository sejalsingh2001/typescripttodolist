import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";
import { Todo } from "../model";

export type Filter = "All" | "Active" | "Completed"

const App: React.FC = () => {
  const [todo, settodo] = useState("");
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

  const Active = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFilterText("Active");
  };
  const Completed = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFilterText("Completed");
  };

  const All = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFilterText("All");
  };
  const clear = () => {
    const set = todos.filter((todo) => todo.isCompleted === false);
    setTodos(set);
  };

  const AddItem = (e: React.FormEvent) => {
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
      settodo("");
    }
  };
  console.log(todos);

  let count = todos.filter((e) => {
    return e.isCompleted === false;
  }).length;

  return (
    <div className="outer-box">
      <div className="title">
        <p id="title">Todo List</p>
      </div>
      <div className="outerBox">
        <div className="innerBox">
          <form onSubmit={AddItem}>
            <input
              type="text"
              id="input"
              placeholder="What needs to be done?"
              value={todo}
              onChange={(e) => settodo(e.target.value)}
              autoComplete="off"
            />

            <ul className="todo-list">
              <TodoList todos={todos} setTodos={setTodos} filter={filter}/>
            </ul>

            <div id="box">
              <span className="middle">
                <b>{count} </b>item left
              </span>
              <div id="together-btn">
                <button className="" value="all" onClick={All}>
                  All
                </button>
                <button className="" value="active" onClick={Active}>
                  Active
                </button>
                <button className="" value="completed" onClick={Completed}>
                  Completed
                </button>
              </div>
              <button value="clearCompleted" onClick={clear}>
              Clear Completed
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
