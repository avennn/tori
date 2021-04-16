/**
 * wait for milliseconds and resolve timer id.
 * @param delay
 * @returns
 */
// TODO
export default function sleep(delay: number): Promise<NodeJS.Timeout> {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
