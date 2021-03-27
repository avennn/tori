export class EventBus {
    listeners: Record<string, Function[]>;
    constructor() {
        this.listeners = {};
    }
    on(event: string, listener: Function) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
        return {
            remove: () => {
                this.off(event, listener);
            },
        };
    }
    once(event: string, listener: Function) {
        this.listeners[event] = [listener];
        return {
            remove: () => {
                this.off(event, listener);
            },
        };
    }
    off(event: string, listener?: Function) {
        if (!listener) {
            delete this.listeners[event];
        } else if (this.listeners[event]) {
            const index = this.listeners[event].findIndex(
                (item) => item === listener
            );
            if (~index) {
                this.listeners[event].splice(index, 1);
            }
        }
    }
    emit(event: string, ...args: any[]) {
        if (this.listeners[event]) {
            this.listeners[event].forEach((listener) => {
                listener(...args);
            });
        }
    }
}

export default new EventBus();
