import { createStore } from "redux";

export const Add = (x, y) => {
  return { type: "ADD", payload: x + y };
};
export const Minus = (x, y) => {
  return { type: "MINUS", payload: x - y };
};
export const Multip = (x, y) => {
  return { type: "MULTIPLY", payload: x * y };
};

const calculReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return (state = action.payload);
    case "MINUS":
      return (state = action.payload);
    case "MULTIPLY":
      return (state = action.payload);

    default:
      return state;
  }
};
export const store = createStore(calculReducer);
