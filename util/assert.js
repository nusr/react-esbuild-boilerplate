"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = void 0;
function assert(condition, message) {
    if (!condition) {
        throw new Error(message || '断言错误');
    }
}
exports.assert = assert;
//# sourceMappingURL=assert.js.map