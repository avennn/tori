/**
 * Return true if val is null or real undefined.
 */
export default function isNil(val: any) {
    return val === null || val === void 0;
}
