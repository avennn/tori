export default function getExactType(val: any) {
    return Object.prototype.toString.call(val).match(/\s(.+)\]$/)![1];
}
