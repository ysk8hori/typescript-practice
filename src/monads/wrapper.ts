import Monads from './monads';

export default class Wrapper<T> implements Monads<T> {
  public static of<T>(value: T): Wrapper<T> {
    return new Wrapper(value);
  }
  constructor(private value: T) {}
  map<R>(f: (p: T) => R): Monads<R> {
    return Wrapper.of(f(this.value));
  }
  /** モナドの最深部が保持する型を判定するのは難しいため、this.valueがモナドの場合はMonads<unknown>を返す。 */
  join<T1 = T extends Monads<unknown> ? unknown : T>(): Monads<T1> {
    if (this.value instanceof Wrapper) {
      return this.value.join();
    } else {
      // @ts-ignore
      return this;
    }
  }
  get: () => T = () => this.value;
  toString(): string {
    return `Wrapper(${this.value})`;
  }
}
