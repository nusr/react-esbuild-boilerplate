export declare class EventEmitter<EventType extends Record<string, unknown> = Record<string, unknown>> {
    protected event: Record<string, Array<(...args: unknown[]) => void>>;
    getEventLength<T extends keyof EventType>(name: T): number;
    on<T extends keyof EventType>(name: T, callback: (data: EventType[T]) => void): VoidFunction;
    emitAsync<T extends keyof EventType>(name: T, data: EventType[T]): void;
    emit<T extends keyof EventType>(name: T, data: EventType[T]): void;
    off<T extends keyof EventType>(name: T, callback?: (data: EventType[T]) => void): void;
    offAll(): void;
    once<T extends keyof EventType>(name: T, callback: (data: EventType[T]) => void): VoidFunction;
}
declare type EventType = {
    change: string;
};
declare const emitter: EventEmitter<EventType>;
export { emitter };
