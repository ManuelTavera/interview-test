export default function redurer(state, action) {
  switch (action.type) {
    case "set_items": {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case "delete_todo": {
      return {
        ...state,
        items: [...state.items].filter(({ id }) => id !== action.payload),
      };
    }
    case "update_todo": {
      return {
        ...state,
        items: [...state.items].map((todo) => {
          if (todo.id === action.payload.id) {
            todo.text = action.payload.text;
          }
          return todo;
        }),
      };
    }
    default: {
      return state;
    }
  }
}
