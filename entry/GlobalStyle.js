"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyle = void 0;
const styled_components_1 = require("styled-components");
exports.GlobalStyle = styled_components_1.createGlobalStyle `
    html {
        font-size: ${(props) => props.theme.font};
        font-family: ${(props) => props.theme.fontFamily};
        color: ${(props) => props.theme.contentColor};
    }
    body,html { 
        margin: 0;
        padding: 0;
    }
`;
//# sourceMappingURL=GlobalStyle.js.map