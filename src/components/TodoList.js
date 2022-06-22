import React from "react";

export default function TodoList(props) {
  const { todoList } = props;

  return (
    <ul className="items-container">
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
