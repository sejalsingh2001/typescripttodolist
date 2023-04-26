import React from "react";
import "./App.css";
import Context from "./context";
import TodoInput from "./TodoInput";


export type Filter = "All" | "Active" | "Completed";
const App: React.FC = () => {

  return (
    <Context>
    <TodoInput/>
     </Context>
  );
};

export default App;


