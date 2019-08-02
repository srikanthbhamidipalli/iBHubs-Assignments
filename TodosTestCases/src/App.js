import React from "react";
import TodoStore from "./Stores/TodoStore";
import EachTodo from "./components/EachTodo";
function App() {
  return (
    <div className="App">
      <EachTodo todoStore={new TodoStore()} />
    </div>
  );
}

export default App;
