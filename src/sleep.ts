/**
 * wait for milliseconds and resolve timer id.
 */
// TODO
export default function sleep(delay: number): Promise<NodeJS.Timeout> {
    return new Promise((resolve) => {
        const timer = setTimeout(() => {
            resolve(timer);
        }, delay);
    });
}
