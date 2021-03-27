import getExactType from './getExactType'

export default function safeJsonParse(input: any, defaultVal?: any) {
    try {
        const result = JSON.parse(input)
        if (
            defaultVal !== undefined &&
            getExactType(result) !== getExactType(defaultVal)
        ) {
            return defaultVal
        } else {
            return result
        }
    } catch (e) {
        return defaultVal
    }
}
