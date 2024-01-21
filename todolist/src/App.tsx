import "./App.css";
import { useState } from "react";
import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([
    { id: 1, title: "foo", completed: false },
    { id: 2, title: "bar", completed: true },
  ]);

  return (
    <div className="App">
      <h1>To Do</h1>
      <ul className="TodoList">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={
              todo.completed
                ? "TodoItem TodoItem--Completed"
                : "TodoItem TodoItem--Incomplete"
            }
          >
            <span>
              <input type="checkbox" checked={todo.completed} />
              {todo.completed ? "DONE: " : "TODO: "}
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
