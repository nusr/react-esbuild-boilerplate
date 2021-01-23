"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelector = exports.useDispatch = exports.StoreProvider = void 0;
const react_1 = __importStar(require("react"));
const lodash_pick_1 = __importDefault(require("lodash.pick"));
const use_immer_1 = require("use-immer");
const reducer_1 = require("./reducer");
const storeContext = react_1.default.createContext(reducer_1.initialState);
const dispatchContext = react_1.default.createContext((() => 0));
exports.StoreProvider = react_1.memo((props) => {
    const { children } = props;
    const [state, dispatch] = use_immer_1.useImmerReducer(reducer_1.reducer, reducer_1.initialState);
    return (react_1.default.createElement(dispatchContext.Provider, { value: dispatch },
        react_1.default.createElement(storeContext.Provider, { value: state }, children)));
});
exports.StoreProvider.displayName = "StoreProvider";
const useDispatch = () => {
    return react_1.useContext(dispatchContext);
};
exports.useDispatch = useDispatch;
function useSelector(pickStr) {
    const cache = react_1.useContext(storeContext);
    return lodash_pick_1.default(cache, pickStr);
}
exports.useSelector = useSelector;
//# sourceMappingURL=store.js.map