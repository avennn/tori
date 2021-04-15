import { isNil } from '../src';

test('isNil(undefined) returns true', () => {
    expect(isNil(undefined)).toBeTruthy();
});

test('isNil(null) returns true', () => {
    expect(isNil(null)).toBeTruthy();
});

test('isNil(1) returns false', () => {
    expect(isNil(1)).toBeFalsy();
});

test('isNil("a") returns false', () => {
    expect(isNil('a')).toBeFalsy();
});

test('isNil([]) returns false', () => {
    expect(isNil([])).toBeFalsy();
});
