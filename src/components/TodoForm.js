import React, { useState } from "react";

export default function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      onSubmit({
        text: value,
        id: Date.now(),
      });
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        placeholder="Add a todo"
        value={value}
        onChange={handleChange}
        name="todo-name"
        className="todo-input"
      />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
}
