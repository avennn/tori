import sleep from './sleep';

/**
 * Run function at least after specific delay.
 */
export default async function runAtLeastDelay(
    fn: (...args: any[]) => any,
    delay = 0,
    startTime?: number
) {
    if (typeof fn !== 'function') {
        throw new Error('params fn must be a function');
    }
    if (typeof delay !== 'number' || delay < 0) {
        throw new Error('params delay must be a positive number');
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
