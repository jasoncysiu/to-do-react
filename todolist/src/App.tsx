import "./App.css";
import { useState } from "react";
import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([
    { id: 1, title: "foo", completed: false },
    { id: 2, title: "bar", completed: true },
  ]);

  const [newTitle, setNewTitle] = useState("");

  function addTodo(title: string) {
    let maxId = 0;
    for (let todo of todos) {
      maxId = Math.max(maxId, todo.id);
    }
    const newTodo = { id: maxId + 1, title: title, completed: false };
    setTodos([...todos, newTodo]);
  }

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo
      )
    );
  }

  return (
    <div className="App">
      <h1>To Do</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(newTitle);
          setNewTitle("");
        }}
      >
        <input
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
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
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(event) =>
                setTodoCompleted(todo.id, event.target.checked)
              }
            />              {todo.completed ? "DONE: " : "TODO: "}
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
