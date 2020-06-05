import { alternation } from '../src/alternation';

describe('alternation', () => {
  describe('number', () => {
    const alternationFunc = alternation(
      (p: number | undefined | null | boolean) => p,
      (p: number | undefined | null | boolean) => 100
    );
    test('-1 -> -1', () => expect(alternationFunc(-1)).toBe(-1));
    test('0 -> 0', () => expect(alternationFunc(0)).toBe(0));
    test('100 -> 100', () => expect(alternationFunc(100)).toBe(100));
    test('undefined -> 100', () =>
      expect(alternationFunc(undefined)).toBe(100));
    test('null -> 100', () => expect(alternationFunc(null)).toBe(100));
    test('true -> true', () => expect(alternationFunc(true)).toBe(true));
    test('false -> 100', () => expect(alternationFunc(false)).toBe(100));
  });
  describe('string', () => {
    const alternationFunc = alternation(
      (p: string) => p,
      (p: string) => 'FUNCTION2'
    );
    test('empty -> empty', () => expect(alternationFunc('')).toEqual(''));
    test('hello -> hello', () =>
      expect(alternationFunc('hello')).toEqual('hello'));
  });
  describe('boolean', () => {
    const altFunc = alternation(
      (p: boolean) => p,
      (p: boolean) => !p
    );

    test('true -> true', () => expect(altFunc(true)).toBeTruthy());
    test('false -> true', () => expect(altFunc(false)).toBeTruthy());
  });

  describe('symbol', () => {
    const altFunc = alternation(
      (p: symbol | false) => p,
      (p: symbol | false) => Symbol()
    );
    const symbolA = Symbol();
    test('symbolA -> symbolA', () => expect(altFunc(symbolA)).toBe(symbolA));
  });
});
