import React from "react";
import { todoStore } from "./Stores/TodoStore";
import EachTodo from "./components/EachTodo";
function App() {
  return (
    <div className="App">
      <EachTodo todoStore={todoStore} />
    </div>
  );
}

export default App;
