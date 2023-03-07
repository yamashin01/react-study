import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import { Todo } from "./Todo";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
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
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => {
        return <Todo title={todo.title} userId={todo.userId} />;
      })}
    </div>
  );
}

export default App;
