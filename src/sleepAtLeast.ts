import sleep from './sleep';

/**
 * Sleep at least delay.
 */
export default async function sleepAtLeast(delay = 0, startTime?: number) {
    if (typeof delay !== 'number' || delay < 0) {
        throw new Error('params delay must be a positive number');
    }
    if (typeof startTime !== 'number' || startTime <= 0) {
        return await sleep(delay);
    }
    const diff = Date.now() - startTime;
    if (diff <= 0 || diff >= delay) {
        return await sleep(0);
    }
    return await sleep(delay - diff);
}
