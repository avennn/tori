import sleepAtLeast from '../src/sleepAtLeast';
import sleep from '../src/sleep';

describe('sleepAtLeast', () => {
    test('validate delay must be a number', () => {
        expect(async () => {
            // @ts-ignore
            await sleepAtLeast('a');
        }).rejects.toThrow('params delay must be a positive number');
    });
    test('same as setTimeout', async () => {
        const start = Date.now();
        await sleepAtLeast(1000);
        const end = Date.now();
        const diff = end - start;
        expect(diff).toBeGreaterThanOrEqual(1000);
    });
    test('startTime is 2000ms before', async () => {
        const start = Date.now();
        await sleep(2000);
        const now = Date.now();
        await sleepAtLeast(1000, start);
        const end = Date.now();
        const diff = end - now;
        expect(diff).toBeGreaterThanOrEqual(0);
    });
    test('startTime is 500ms before', async () => {
        const start = Date.now();
        await sleep(500);
        const now = Date.now();
        await sleepAtLeast(1000, start);
        const end = Date.now();
        const diff = end - now;
        expect(diff).toBeGreaterThanOrEqual(500);
    });
});
