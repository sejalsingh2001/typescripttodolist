import React, { useContext } from 'react'
import { TodoContext } from './context';
import TodoList from './TodoList'

const TodoInput = () => {
    const { addItem,todos,setActive,setCompleted, setAll,clear ,setTodo,todo} = useContext(TodoContext) ;
    let count = todos.filter((e: any) => {
        return e.isCompleted === false;
      }).length;
    
  return (
          <div className="outer-box">
      <div className="title">
        <p id="title">Todo List</p>
      </div>
      <div className="outerBox">
        <div className="innerBox">
          <form onSubmit={addItem}>
            <input
              type="text"
              id="input"
              placeholder="What needs to be done?"
              value={todo}
              onChange={(e) => {setTodo(e.target.value)
              console.log(todo)
              }}
              autoComplete="off"
            />

            <ul className="todo-list">
              
                <TodoList />
             
            </ul>

            <div id="box">
              <span className="middle">
                <b>{count} </b>item left
              </span>
              <div id="together-btn">
                <button className="" value="all" onClick={setAll}>
                  All
                </button>
                <button className="" value="active" onClick={setActive}>
                  Active
                </button>
                <button className="" value="completed" onClick={setCompleted}>
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
  )
}

export default TodoInput
