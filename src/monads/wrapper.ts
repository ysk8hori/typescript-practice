import Monads from './monads';

export default class Wrapper<T> implements Monads<T> {
  public static of<T>(value: T): Wrapper<T> {
    return new Wrapper(value);
  }
  private constructor(private value: T) {}
  public map<R>(f: (p: T) => R): Wrapper<R> {
    return Wrapper.of(f(this.value));
  }
  public join(): Wrapper<MonadsValue<T>> {
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
type MonadsValue<T> = T extends Monads<infer U> ? U : T;
