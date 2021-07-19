import isPlainObject from './isPlainObject';
import toRawType from './toRawType';

interface IJsonParseOption {
    force?: boolean; // force result to keep same type with defaultVal
}

/**
 * Try to parse input value correctly，return defaultVal if catch error.
 */
export default function safeJsonParse(
    input: any,
    defaultVal?: any,
    options?: IJsonParseOption
) {
    try {
        const result = JSON.parse(input);
        if (
            isPlainObject(options) &&
            options!.force &&
            toRawType(result) !== toRawType(defaultVal)
        ) {
            return defaultVal;
        }
        return result;
    } catch (e) {
        return defaultVal;
    }
}
