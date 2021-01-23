"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emitter = exports.EventEmitter = void 0;
class EventEmitter {
    constructor() {
        this.event = {};
    }
    getEventLength(name) {
        const temp = this.event[name];
        return (temp && temp.length) || 0;
    }
    on(name, callback) {
        this.event[name] = this.event[name] || [];
        this.event[name].push(callback);
        return () => this.off(name, callback);
    }
    emitAsync(name, data) {
        const list = this.event[name];
        if (!list || list.length <= 0) {
            return;
        }
        for (const item of list) {
            window.requestAnimationFrame(() => {
                item(data);
            });
        }
    }
    emit(name, data) {
        const list = this.event[name];
        if (!list || list.length <= 0) {
            return;
        }
        for (const item of list) {
            item(data);
        }
    }
    off(name, callback) {
        const result = [];
        const events = this.event[name];
        if (events && callback) {
            for (const item of events) {
                if (item !== callback && item._ !== callback) {
                    result.push(item);
                }
            }
        }
        if (result.length) {
            this.event[name] = result;
        }
        else {
            delete this.event[name];
        }
    }
    offAll() {
        this.event = {};
    }
    once(name, callback) {
        const listener = (data) => {
            this.off(name, listener);
            callback(data);
        };
        listener._ = callback;
        return this.on(name, listener);
    }
}
exports.EventEmitter = EventEmitter;
const emitter = new EventEmitter();
exports.emitter = emitter;
//# sourceMappingURL=EventEmitter.js.map