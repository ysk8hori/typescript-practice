import Monads from './monads';

export default class Wrapper<T> implements Monads<T> {
  public static of<T>(value: T): Wrapper<T> {
    return new Wrapper(value);
  }
  private constructor(private value: T) {}
  public map<R>(f: (p: T) => R): Wrapper<R> {
    return Wrapper.of(f(this.value));
  }
  /** モナドの最深部が保持する型を判定するのは難しいため、this.valueがモナドの場合はMonads<unknown>を返す。 */
  public join<T1 = T extends Wrapper<unknown> ? unknown : T>(): Wrapper<T1> {
    if (this.value instanceof Wrapper) {
      return this.value.join();
    } else {
      // @ts-ignore
      return this;
    }
  }
  public get: () => T = () => this.value;
  public toString(): string {
    return `Wrapper(${this.value})`;
  }
}
