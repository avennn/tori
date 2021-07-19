/**
 * Get exact type of input value.
 * Return string such as: Object, Array, Function, String, Boolean, Number, Undefined and Null.
 */
export default function toRawType(val?: any) {
    return Object.prototype.toString.call(val).slice(8, -1);
}
