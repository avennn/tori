import toRawType from './toRawType';

export default function isPlainObject(input?: any) {
    return toRawType(input) === 'Object';
}
