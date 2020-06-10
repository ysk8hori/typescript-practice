import { maybeFromNullable } from '../src/monads/factory';
import IO from '../src/monads/io';
describe('maybe', () => {
  const nullish = () => maybeFromNullable<number>(null);
  const numberish = () => maybeFromNullable(1);
  const countUp = (num: number) => ++num;
  const toIo = (num: number) => IO.of({ foo: num });
  const withoutNull = (arg: any) => arg !== null;
  const isOne = (num: number) => num === 1;
  const isTwo = (num: number) => num === 2;
  describe('nullish', () => {
    test('toEqual', () => {
      expect(nullish().toString()).toEqual('Maybe.Nothing');
    });
    test('map', () => {
      expect(nullish().map(countUp).toString()).toEqual('Maybe.Nothing');
    });
    test('getOrElse', () => {
      expect(nullish().getOrElse(10000)).toBe(10000);
    });
    test('chain', () => {
      expect(nullish().chain(toIo).toString()).toEqual('Maybe.Nothing');
    });
    test('filter(withoutNull)', () => {
      expect(nullish().filter(withoutNull).toString()).toEqual('Maybe.Nothing');
    });
    test('filter(isOne)', () => {
      expect(nullish().filter(isOne).toString()).toEqual('Maybe.Nothing');
    });
    test('filter(isTwo)', () => {
      expect(nullish().filter(isTwo).toString()).toEqual('Maybe.Nothing');
    });
    test('isJust', () => {
      expect(nullish().isJust()).toBeFalsy();
    });
    test('isNothing', () => {
      expect(nullish().isNothing()).toBeTruthy();
    });
  });
  describe('numberish', () => {
    test('toEqual', () => {
      expect(numberish().toString()).toEqual('Maybe.Just(1)');
    });
    test('map', () => {
      expect(numberish().map(countUp).toString()).toEqual('Maybe.Just(2)');
    });
    test('getOrElse', () => {
      expect(numberish().getOrElse(10000)).toBe(1);
    });
    test('chain', () => {
      expect(numberish().chain(toIo).toString()).toEqual('IO([object Object])');
    });
    test('filter(withoutNull)', () => {
      expect(numberish().filter(withoutNull).toString()).toEqual(
        'Maybe.Just(1)'
      );
    });
    test('filter(isOne)', () => {
      expect(numberish().filter(isOne).toString()).toEqual('Maybe.Just(1)');
    });
    test('filter(isTwo)', () => {
      expect(numberish().filter(isTwo).toString()).toEqual('Maybe.Nothing');
    });
    test('isJust', () => {
      expect(numberish().isJust()).toBeTruthy();
    });
    test('isNothing', () => {
      expect(numberish().isNothing()).toBeFalsy();
    });
  });
});
