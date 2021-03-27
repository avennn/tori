/**
 * Try to parse input value correctly，return defaultVal if catch error.
 */
export default function safeJsonParse(input: any, defaultVal?: any) {
    try {
        return JSON.parse(input);
    } catch (e) {
        return defaultVal;
    }
}
