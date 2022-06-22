import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

export default function TodoTask(props) {
  const { todo, deleteTodo } = props;

  return (
    <div className="todo-task-container">
      <p className="todo-task-text">{todo.text}</p>
      <div className="todo-task-actions">
        <RiCloseCircleLine
          className="icon icon-delete"
          onClick={() => deleteTodo(todo.id)}
        />
        <TiEdit className="icon" />
      </div>
    </div>
  );
}
