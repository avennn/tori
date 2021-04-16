import sleep from './sleep';

/**
 * Run function at least after specific delay.
 */
export default async function runAtLeastDelay(
    delay = 0,
    fn: (...args: any[]) => any,
    startTime: number
) {
    if (typeof delay !== 'number' || delay < 0) {
        throw new Error('delay must be a positive number');
    }
    if (typeof fn !== 'function') {
        throw new Error('fn must be a function');
    }
    if (typeof startTime !== 'number' || startTime <= 0) {
        await sleep(delay);
        fn();
    } else {
        const diff = Date.now() - startTime;
        if (diff <= 0 || diff >= delay) {
            fn();
        } else {
            await sleep(delay - diff);
            fn();
        }
    }
}
