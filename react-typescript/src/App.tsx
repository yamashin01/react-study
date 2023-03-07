import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import { Text } from "./Text";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const onClickFetchData = () => {
    axios
      .get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <Text color="red" fontSize={16} />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
}

export default App;
