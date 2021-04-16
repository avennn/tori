import { getExactType } from '../src';

describe('getExactType', () => {
    test('input 1 and return Number', () => {
        expect(getExactType(1)).toBe('Number');
    });
    test('input "test" and return String', () => {
        expect(getExactType('test')).toBe('String');
    });
    test('input true and return Boolean', () => {
        expect(getExactType(true)).toBe('Boolean');
    });
    test('input {} and return Object', () => {
        expect(getExactType({})).toBe('Object');
    });
    test('input [] and return Array', () => {
        expect(getExactType([])).toBe('Array');
    });
    test('input () => {} and return Function', () => {
        const a = () => {
            return 'a';
        };
        expect(getExactType(a)).toBe('Function');
    });
    test('input null and return Null', () => {
        expect(getExactType(null)).toBe('Null');
    });
    test('input undefined and return Function', () => {
        expect(getExactType()).toBe('Undefined');
    });
    test('input new Boolean(true) and return Ojbect', () => {
        expect(getExactType(new Boolean(true))).toBe('Boolean');
    });
    test('input Boolean(true) and return Ojbect', () => {
        expect(getExactType(Boolean(true))).toBe('Boolean');
    });
});
