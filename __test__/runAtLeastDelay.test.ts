import runAtLeastDelay from '../src/runAtLeastDelay';
import sleep from '../src/sleep';

describe('runAtLeastDelay', () => {
    test('validate delay must be a number', () => {
        expect(async () => {
            // @ts-ignore
            await runAtLeastDelay(() => {}, 'a');
        }).rejects.toThrow('params delay must be a positive number');
    });
    test('validate fn must be a function', () => {
        expect(async () => {
            // @ts-ignore
            await runAtLeastDelay('func', 1000);
        }).rejects.toThrow('params fn must be a function');
    });
    test('same as setTimeout', () => {
        const start = Date.now();
        runAtLeastDelay(() => {
            const end = Date.now();
            const diff = end - start;
            expect(diff).toBeGreaterThanOrEqual(1000);
        }, 1000);
    });
    test('startTime is 2000ms before', async () => {
        const start = Date.now();
        await sleep(2000);
        const now = Date.now();
        runAtLeastDelay(
            () => {
                const end = Date.now();
                const diff = end - now;
                expect(diff).toBeGreaterThanOrEqual(0);
            },
            1000,
            start
        );
    });
    test('startTime is 500ms before', async () => {
        const start = Date.now();
        await sleep(500);
        const now = Date.now();
        runAtLeastDelay(
            () => {
                const end = Date.now();
                const diff = end - now;
                expect(diff).toBeGreaterThanOrEqual(500);
            },
            1000,
            start
        );
    });
});
