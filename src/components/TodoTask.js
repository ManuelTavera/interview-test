import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

import TodoForm from "./TodoForm";

export default function TodoTask(props) {
  const { todo, deleteTodo, updateTodo } = props;
  const [update, setUpdate] = useState(false);

  const handleUpdate = () => {
    setUpdate(true);
  };

  const handleSubmit = (todo) => {
    updateTodo(todo);
    setUpdate(false);
  };

  if (update) {
    return <TodoForm onSubmit={handleSubmit} edit={true} todo={todo} />;
  }

  return (
    <div className="todo-task-container">
      <p className="todo-task-text">{todo.text}</p>
      <div className="todo-task-actions">
        <RiCloseCircleLine
          className="icon icon-delete"
          onClick={() => deleteTodo(todo.id)}
        />
        <TiEdit className="icon" onClick={handleUpdate} />
      </div>
    </div>
  );
}
