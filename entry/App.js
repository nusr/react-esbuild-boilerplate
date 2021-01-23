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
exports.App = void 0;
const react_1 = __importStar(require("react"));
const components_1 = require("@/components");
const styled_components_1 = __importStar(require("styled-components"));
const GlobalStyle_1 = require("./GlobalStyle");
const theme_1 = __importDefault(require("@/theme"));
const store_1 = require("@/store");
const util_1 = require("@/util");
const IconList = styled_components_1.default.div `
  font-size: 16px;
  display: flex;
  text-align: center;
`;
const IconItem = styled_components_1.default.div `
  margin: 10px;
`;
const ICON_LIST = ["bold", "italic", "underline"];
exports.App = react_1.default.memo(() => {
    const dispatch = store_1.useDispatch();
    const { activeColor } = store_1.useSelector(["activeColor"]);
    react_1.useEffect(() => {
        if (process.env.NODE_ENV !== "production") {
            util_1.handleBuildError();
        }
    }, []);
    const onChangeColor = react_1.useCallback((event) => {
        const { value } = event.target;
        dispatch({ type: "CHANGE_ACTIVE_COLOR", payload: value });
    }, [dispatch]);
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.default },
        react_1.default.createElement(GlobalStyle_1.GlobalStyle, null),
        react_1.default.createElement(components_1.Github, null),
        react_1.default.createElement(IconList, { style: { color: activeColor } },
            ICON_LIST.map((key) => (react_1.default.createElement(IconItem, { key: key },
                react_1.default.createElement(components_1.BaseIcon, { name: key }),
                react_1.default.createElement("div", null, `<BaseIcon name="${key}" />`)))),
            react_1.default.createElement("input", { type: "color", value: activeColor, onChange: onChangeColor }))));
});
exports.App.displayName = "APP";
//# sourceMappingURL=App.js.map