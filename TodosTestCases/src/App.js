import React from "react";
import TodoStore from "./Stores/TodoStore";
import EnterTodo from "./components/EnterTodo";
function App() {
  return (
    <div className="App">
      <EnterTodo todoStore={new TodoStore()} />
    </div>
  );
}

export default App;
