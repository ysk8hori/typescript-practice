import Monads from './monads';

export default class Wrapper<T> implements Monads<T> {
  public static of<T>(value: T): Wrapper<T> {
    return new Wrapper(value);
  }
  private constructor(private value: T) {}
  public map<R>(f: (p: T) => R): Wrapper<R> {
    return Wrapper.of(f(this.value));
  }
  public join(): Wrapper<T>;
  public join(): Wrapper<Value<T>>;
  public join(): Wrapper<Value<T>> | Wrapper<T> {
    return this.value instanceof Wrapper ? this.value.join() : this;
  }
  public get: () => T = () => this.value;
  public toString(): string {
    return `Wrapper(${this.value})`;
  }
}

type Flat<T> = T extends Monads<infer U> ? U : T;
type IsMonads<T> = T extends Monads<any> ? true : false;
type SuperFlat<T> = Flat<Flat<Flat<Flat<Flat<Flat<Flat<T>>>>>>>;
type Value<T> = IsMonads<SuperFlat<T>> extends false ? SuperFlat<T> : unknown;
