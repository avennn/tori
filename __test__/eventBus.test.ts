import EventBus from '../src/eventBus';

describe('EventBus', () => {
    beforeEach(() => {
        EventBus.off('test');
    });
    test('on', () => {
        let sum = 0;
        let plus = 0;
        EventBus.on('test', (a: number, b: number) => {
            sum = a + b;
        });
        EventBus.on('test', (a: number, b: number) => {
            plus = a * b;
        });
        EventBus.emit('test', 1, 2);
        expect(sum).toBe(3);
        expect(plus).toBe(2);
        EventBus.off('test');
    });
    test('once', () => {
        let sum = 0;
        let plus = 0;
        EventBus.once('test', (a: number, b: number) => {
            sum = a + b;
        });
        EventBus.once('test', (a: number, b: number) => {
            plus = a * b;
        });
        EventBus.emit('test', 1, 2);
        expect(sum).toBe(0);
        expect(plus).toBe(2);
        EventBus.off('test');
    });
    test('return object has key remove', () => {
        const subscription = EventBus.on('test', (a: number, b: number) => {
            return a + b;
        });
        EventBus.emit('test', 1, 2);
        expect(EventBus).toHaveProperty('listeners');
        expect(EventBus.listeners).toHaveProperty('test');
        expect(subscription).toHaveProperty('remove');
        subscription.remove();
        expect(EventBus.listeners['test']).toHaveLength(0);
    });
    test('off', () => {
        function sum(a: number, b: number) {
            return a + b;
        }
        function plus(a: number, b: number) {
            return a * b;
        }
        function subtract(a: number, b: number) {
            return a - b;
        }
        EventBus.on('test', sum);
        EventBus.on('test', plus);
        EventBus.on('test', subtract);
        expect(EventBus).toHaveProperty('listeners');
        expect(EventBus.listeners).toHaveProperty('test');
        expect(EventBus.listeners['test']).toHaveLength(3);
        EventBus.off('test', sum);
        expect(EventBus.listeners['test']).toHaveLength(2);
        EventBus.off('test');
        expect(EventBus.listeners['test']).toBeUndefined();
    });
});
