/**
 * Get exact type of input value.
 * Return string such as: Object, Array, Function, String, Boolean, Number, Undefined and Null.
 */
export default function getExactType(val: any) {
    return Object.prototype.toString.call(val).match(/\s(.+)\]$/)![1];
}
