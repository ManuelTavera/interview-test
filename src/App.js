import { useReducer } from "react";
import "./App.css";
import reducer from "./reducer";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialState = {
  items: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todo) => {
    dispatch({
      type: "set_items",
      payload: todo,
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "delete_todo",
      payload: id,
    });
  };

  const updateTodo = (newTodo) => {
    dispatch({
      type: "update_todo",
      payload: newTodo,
    });
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todoList={state.items}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
