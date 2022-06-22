import React from "react";

import TodoTask from "./TodoTask";

export default function TodoList(props) {
  const { todoList } = props;

  return (
    <ul className="items-container">
      {todoList.map((todo) => (
        <TodoTask key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
