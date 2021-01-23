export declare type State = {
    activeColor: string;
};
export declare type Action = {
    type: "CHANGE_ACTIVE_COLOR";
    payload: string;
} | {
    type: "RESET";
};
export declare type Reducer = (state: State, action: Action) => State;
