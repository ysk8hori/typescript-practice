import Maybe from './maybe';
import { maybeFromNullable } from './factory';
import Nothing from './nothing';
import Monads from './monads';

export default class Just<T> implements Maybe<T> {
  public static of<T>(value: T): Just<T> {
    return new Just(value);
  }
  private constructor(private _value: T) {}
  public get value(): T {
    return this._value;
  }
  public isJust(): this is Just<T> {
    return true;
  }
  public isNothing(): this is Nothing<T> {
    return false;
  }
  public map<R>(f: (p: T) => R): Maybe<R> {
    return maybeFromNullable(f(this.value));
  }
  public getOrElse(p: T): T {
    return this.value;
  }
  public filter(f: (p: T) => boolean): Maybe<T> {
    return maybeFromNullable(f(this.value) ? this.value : undefined);
  }
  public chain<R>(f: (p: T) => Monads<R>): Monads<R> {
    return f(this.value);
  }
  public toString(): string {
    return `Maybe.Just(${this.value})`;
  }
}

export function just<T>(value: T): Just<T> {
  return Just.of(value);
}
