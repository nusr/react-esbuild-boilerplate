"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.initialState = void 0;
exports.initialState = {
    activeColor: "#217346",
};
const reducer = (state, action) => {
    console.log(`%c action type: ${action.type}`, "color: red;", action);
    switch (action.type) {
        case "CHANGE_ACTIVE_COLOR":
            state.activeColor = action.payload;
            break;
        case "RESET":
            state = exports.initialState;
            break;
        default:
            break;
    }
    return state;
};
exports.reducer = reducer;
//# sourceMappingURL=reducer.js.map