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
    default: {
      return state;
    }
  }
}
