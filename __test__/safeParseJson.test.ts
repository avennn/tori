import { safeJsonParse } from '../src';

describe('safeJsonParse', () => {
    test('parse "true"', () => {
        expect(safeJsonParse('true')).toBe(true);
    });
    test('parse true', () => {
        expect(safeJsonParse(true)).toBe(true);
    });
    test('parse "null"', () => {
        expect(safeJsonParse('null')).toBe(null);
    });
    test('parse null', () => {
        expect(safeJsonParse(null)).toBe(null);
    });
    test('parse ""', () => {
        expect(safeJsonParse('')).toBeUndefined();
    });
    test('parse "name"', () => {
        expect(safeJsonParse('name')).toBeUndefined();
    });
    test('parse {"name": "javen"}', () => {
        expect(safeJsonParse('{"name": "javen"}')).toEqual({ name: 'javen' });
    });
    test('parse ["sam", "javen"]', () => {
        expect(safeJsonParse('["sam", "javen"]')).toEqual(['sam', 'javen']);
    });
    test('parse {name: "javen"} with error', () => {
        expect(safeJsonParse('{name: "javen"}', {})).toEqual({});
    });
    test('parse {name: "javen"} with error', () => {
        expect(safeJsonParse('{name: "javen"}', false)).toBe(false);
    });
    test('parse "false" with default value true', () => {
        expect(safeJsonParse('false', true)).toBe(false);
    });
    test('parse ["a", "b"] with force true', () => {
        expect(
            safeJsonParse('["a", "b"]', { name: 'javen' }, { force: true })
        ).toEqual({ name: 'javen' });
    });
});
