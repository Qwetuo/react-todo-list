import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList titleName="First List" todos={["find a", "find b", "find c"]} />
        <TodoList titleName="Second List" todos={["find d", "find e", "find f"]} />
      </div>
    );
  }
}

export default App;
