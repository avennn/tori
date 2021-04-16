import { sleep } from '../src';

const delay = 1000;

describe('sleep', () => {
    test('return after 1s', async () => {
        const start = Date.now();
        await sleep(delay);
        const end = Date.now();
        const diff = end - start;
        expect(diff).toBeGreaterThanOrEqual(delay);
    });
});
