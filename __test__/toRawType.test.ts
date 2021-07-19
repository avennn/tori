import { toRawType } from '../src';

describe('toRawType', () => {
    test('input 1 and return Number', () => {
        expect(toRawType(1)).toBe('Number');
    });
    test('input "test" and return String', () => {
        expect(toRawType('test')).toBe('String');
    });
    test('input true and return Boolean', () => {
        expect(toRawType(true)).toBe('Boolean');
    });
    test('input {} and return Object', () => {
        expect(toRawType({})).toBe('Object');
    });
    test('input [] and return Array', () => {
        expect(toRawType([])).toBe('Array');
    });
    test('input () => {} and return Function', () => {
        const a = () => {
            return 'a';
        };
        expect(toRawType(a)).toBe('Function');
    });
    test('input null and return Null', () => {
        expect(toRawType(null)).toBe('Null');
    });
    test('input undefined and return Function', () => {
        expect(toRawType()).toBe('Undefined');
    });
    test('input new Boolean(true) and return Ojbect', () => {
        expect(toRawType(new Boolean(true))).toBe('Boolean');
    });
    test('input Boolean(true) and return Ojbect', () => {
        expect(toRawType(Boolean(true))).toBe('Boolean');
    });
});
