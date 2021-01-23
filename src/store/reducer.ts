import { State, Reducer } from "@/types";

export const initialState: State = {
  activeColor: "#217346",
};

export const reducer: Reducer = (state, action) => {
  console.log(`%c action type: ${action.type}`, "color: red;", action);
  switch (action.type) {
    case "CHANGE_ACTIVE_COLOR":
      state.activeColor = action.payload;
      break;
    case "RESET":
      state = initialState;
      break;
    default:
      break;
  }
  return state;
};
