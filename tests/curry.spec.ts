import { curry } from '../src/functions/curry';
describe('curry', () => {
  test('no argument', () => {
    function greet(): string {
      return 'hi';
    }
    const curried = curry(greet);
    expect(curried()).toBe('hi');
  });
  test('one number', () => {
    function countUp(a: number): number {
      return ++a;
    }
    const curried = curry(countUp);
    expect(curried(3)).toBe(4);
  });
  test('two numbers', () => {
    function addition(a: number, b: number): number {
      return a + b;
    }
    const fivePlus = curry(addition)(5);
    expect(fivePlus(3)).toBe(8);
  });
  test('fives', () => {
    function fives(a: number, b: string, c: boolean, d: number[], e: string[]) {
      return `a:${a} / b:${b} / c:${c} / d:${d} / e:${e}`;
    }
    const curried1 = curry(fives);
    const curried2 = curried1(7);
    const curried3 = curried2('hi');
    const curried4 = curried3(true);
    const curried5 = curried4([1, 2, 3]);
    expect(curried5(['curried', 'success'])).toEqual(
      'a:7 / b:hi / c:true / d:1,2,3 / e:curried,success'
    );
  });
  test('six', () => {
    function six(
      a: number,
      b: string,
      c: boolean,
      d: number[],
      e: string[],
      f: { foo: string },
      g: number
    ) {
      return `a:${a} / b:${b} / c:${c} / d:${d} / e:${e}, f:${JSON.stringify(
        f
      )} / g:${g}`;
    }
    const curried1 = curry(six);
    const curried2 = curried1(7);
    const curried3 = curried2('hi');
    const curried4 = curried3(true);
    const curried5 = curried4([1, 2, 3]);
    const curried6 = curried5(['curried', 'success?']);
    expect(curried6({ foo: 'bar' })(1)).toEqual(
      'a:7 / b:hi / c:true / d:1,2,3 / e:curried,success?, f:{"foo":"bar"} / g:1'
    );
  });
});
