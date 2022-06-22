export default function redurer(state, action) {
  switch (action.type) {
    case "set_items": {
      const newState = {
        ...state,
        items: [...state.items, action.payload],
      };

      localStorage.setItem("Todos", JSON.stringify(newState.items));
      return newState;
    }
    case "delete_todo": {
      const newState = {
        ...state,
        items: [...state.items].filter(({ id }) => id !== action.payload),
      };

      localStorage.setItem("Todos", JSON.stringify(newState.items));
      return newState;
    }
    case "update_todo": {
      const newState = {
        ...state,
        items: [...state.items].map((todo) => {
          if (todo.id === action.payload.id) {
            todo.text = action.payload.text;
          }
          return todo;
        }),
      };

      localStorage.setItem("Todos", JSON.stringify(newState.items));
      return newState;
    }
    case "get_todo_from_local_storage": {
      const items = localStorage.getItem("Todos");
      const newState = { ...state };
      if (items) {
        newState.items = JSON.parse(items);
      }

      return newState;
    }
    default: {
      return state;
    }
  }
}
