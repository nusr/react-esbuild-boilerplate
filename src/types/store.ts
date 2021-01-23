export type State = {
  activeColor: string;
};

export type Action =
  | { type: "CHANGE_ACTIVE_COLOR"; payload: string }
  | { type: "RESET" };

export type Reducer = (state: State, action: Action) => State;
