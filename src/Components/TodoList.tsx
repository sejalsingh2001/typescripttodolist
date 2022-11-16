
import React, { useState } from "react";
import { Todo } from "../model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  filter: Todo[];
}

const Todolist: React.FC<Props> = ({ todos, setTodos, filter }) => {

  const [edit, setEdit] = useState<number | null>(null);
  const [editTodo, setEditTodo] = useState("");

  console.log(edit);

  const DeleteItem = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const ToggleItem = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const EditItem = (id: number, editTodo: string) => {
    setEdit(id);
   
    if (id === edit) {
   
      let editList = todos.map((todo) => {
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
      {filter.map((todo) => (
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

              <button className="Del"
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
};

export default Todolist;
