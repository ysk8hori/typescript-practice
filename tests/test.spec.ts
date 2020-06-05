import { pipe } from '../src/pipe';
import { identity } from '../src/identity';
import { tap } from '../src/tap';
import { seq } from '../src/seq';
function createFizzBuzz(
  fizzBuzzString: string,
  ...nums: number[]
): (input: number | string) => number | string {
  return (input: number | string) =>
    typeof input === 'number' && nums.every((num) => input % num === 0)
      ? fizzBuzzString
      : input;
}

const toFizz = createFizzBuzz('Fizz', 3);
const toBuzz = createFizzBuzz('Buzz', 5);
const toFizzBuzz = createFizzBuzz('FizzBuzz', 3, 5);
function toString(input: any): string {
  return input.toString();
}
const debug = (p: string | number) => console.debug(p);
const info = (p: string | number) => console.info(p);
const fizzbuzz = pipe(
  identity<number>(),
  toFizzBuzz,
  toFizz,
  toBuzz,
  tap<number | string>(seq(debug, info)),
  toString
);

describe('FizzBuzz', () => {
  test('2 -> 2', () => expect(fizzbuzz(2)).toEqual('2'));
  test('3 -> Fizz', () => expect(fizzbuzz(3)).toEqual('Fizz'));
  test('4 -> 4', () => expect(fizzbuzz(4)).toEqual('4'));
  test('5 -> Buzz', () => expect(fizzbuzz(5)).toEqual('Buzz'));
  test('6 -> Fizz', () => expect(fizzbuzz(6)).toEqual('Fizz'));
  test('10 -> Buzz', () => expect(fizzbuzz(10)).toEqual('Buzz'));
  test('15 -> FizzBuzz', () => expect(fizzbuzz(15)).toEqual('FizzBuzz'));
  test('30 -> FizzBuzz', () => expect(fizzbuzz(30)).toEqual('FizzBuzz'));
});
