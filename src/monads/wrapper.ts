import Monads from './monads';

export default class Wrapper<T> implements Monads<T> {
  public static of<T>(value: T): Wrapper<T> {
    return new Wrapper(value);
  }
  private constructor(private value: T) {}
  public map<R>(f: (p: T) => R): Wrapper<R> {
    return Wrapper.of(f(this.value));
  }
  public join(): Wrapper<FlatMonads<T>> {
    if (this.value instanceof Wrapper) {
      // @ts-ignore
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

type Flat<T> = T extends Monads<infer U> ? U : T;
type IsMonads<T> = T extends Monads<any> ? true : false;
type SuperFlatMonads<T> = Flat<Flat<Flat<Flat<Flat<Flat<Flat<T>>>>>>>;
type FlatMonads<T> = IsMonads<SuperFlatMonads<T>> extends false
  ? SuperFlatMonads<T>
  : unknown;
