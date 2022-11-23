import React, { useState } from "react";
import { TodoContextType } from "../model";
import { TodoContext } from "./context";

function Todolist() {
  const [edit, setEdit] = useState<number | null>(null);
  const [editTodo, setEditTodo] = useState("");
  const { todos, setTodos, filter } = React.useContext(
    TodoContext
  ) as TodoContextType;
  console.log(edit);
  console.log(todos);
  console.log(setTodos);
  console.log(filter);

  const DeleteItem = (id: number) => {
    setTodos(todos.filter((todo: any) => todo.id !== id));
  };

  const ToggleItem = (id: number) => {
    setTodos(
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const EditItem = (id: number, editTodo: string) => {
    setEdit(id);

    if (id === edit) {
      let editList = todos.map((todo: any) => {
        if (edit) {
          if (todo.id === id) {
            return {
              ...todo,
              todo: editTodo,
            };
          }
        }
        //console.log(todo);
        return todo;
      });

      setTodos(editList);
      setEditTodo("");
      setEdit(null);
    }
  };

  return (
    <>
      {filter.map((todo: any) => (
        <div>
          <li className="eachitem">
            <input
              type="checkbox"
              onChange={() => ToggleItem(todo.id)}
              checked={todo.isCompleted}
            />
            {edit === todo.id ? (
              <input
                type="text"
                id="input1"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                autoFocus
              ></input>
            ) : (
              <span
                className={
                  todo.isCompleted === true ? "completed" : "not-completed"
                }
              >
                {todo.todo}
              </span>
            )}

            <button
              style={{ border: "none" }}
              name="edit"
              className={edit === todo.id ? "save" : "edit"}
              onClick={() => EditItem(todo.id, editTodo)}
            >
              {edit === todo.id ? "SAVE" : "EDIT"}
            </button>

            <button
              className="Del"
              onClick={() => {
                DeleteItem(todo.id);
              }}
            >
              X
            </button>
          </li>
        </div>
      ))}
    </>
  );
}

export default Todolist;
