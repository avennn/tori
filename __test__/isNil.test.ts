import { isNil } from '../src';

describe('isNil', () => {
    test('input undefined and return true', () => {
        expect(isNil(undefined)).toBeTruthy();
    });

    test('input null and return true', () => {
        expect(isNil(null)).toBeTruthy();
    });

    test('input 1 and return false', () => {
        expect(isNil(1)).toBeFalsy();
    });

    test('input string a and return false', () => {
        expect(isNil('a')).toBeFalsy();
    });

    test('input [] and return false', () => {
        expect(isNil([])).toBeFalsy();
    });
});
