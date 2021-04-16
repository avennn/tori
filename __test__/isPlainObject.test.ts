import { isPlainObject } from '../src';

describe('isPlainObject', () => {
    test('input {} and return true', () => {
        expect(isPlainObject({})).toBeTruthy();
    });
    test('input {name: "javen"} and return true', () => {
        expect(isPlainObject({ name: 'javen' })).toBeTruthy();
    });
    test('input [] and return false', () => {
        expect(isPlainObject([])).toBeFalsy();
    });
    test('input 1 and return false', () => {
        expect(isPlainObject(1)).toBeFalsy();
    });
    test('input null and return false', () => {
        expect(isPlainObject(null)).toBeFalsy();
    });
    test('input undefined and return false', () => {
        expect(isPlainObject()).toBeFalsy();
    });
});
