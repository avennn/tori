import getExactType from './getExactType';

export default function isPlainObject(input?: any) {
    return getExactType(input) === 'Object';
}
