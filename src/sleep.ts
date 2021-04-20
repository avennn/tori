/**
 * wait for milliseconds and resolve timer id.
 */
export default function sleep(
    delay: number,
    timerGetter?: (timer: number) => any
): Promise<number> {
    return new Promise((resolve) => {
        const timer = setTimeout(resolve, delay);
        if (timerGetter && typeof timerGetter === 'function') {
            timerGetter(timer);
        }
    });
}
