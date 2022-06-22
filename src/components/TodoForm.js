import React, { useState } from "react";

export default function TodoForm(props) {
  const { edit, onSubmit, todo } = props;
  const [value, setValue] = useState(edit ? todo.text : "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      onSubmit({
        text: value,
        id: edit ? todo.id : Date.now(),
      });
      setValue("");
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
        {edit ? "Update" : "Add"}
      </button>
    </form>
  );
}
