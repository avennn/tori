export class EventBus {
    listeners: Record<string, ((...args: any[]) => any)[]>;
    constructor() {
        this.listeners = {};
    }
    on(event: string, listener: (...args: any[]) => any) {
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
    once(event: string, listener: (...args: any[]) => any) {
        this.listeners[event] = [listener];
        return {
            remove: () => {
                this.off(event, listener);
            },
        };
    }
    off(event: string, listener?: (...args: any[]) => any) {
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
