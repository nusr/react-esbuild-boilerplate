"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBuildError = void 0;
function handleBuildError() {
    fetch("/buildError.txt")
        .then((res) => {
        if (res.status === 404) {
            return "";
        }
        return res.text();
    })
        .then((data) => {
        if (data) {
            console.error(data);
        }
    })
        .catch(console.error);
}
exports.handleBuildError = handleBuildError;
//# sourceMappingURL=error.js.map