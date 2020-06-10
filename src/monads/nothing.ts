import Maybe from './maybe';
import Just from './just';
import Monads from './monads';

export default class Nothing<T> implements Maybe<T> {
  public static of<T>(value: T | undefined | null): Nothing<T> {
    return new Nothing<T>();
  }
  public isNothing(): this is Nothing<T> {
    return true;
  }
  public isJust(): this is Just<T> {
    return false;
  }
  public map<R>(f: (p: T) => R): Maybe<R> {
    return new Nothing<R>();
  }
  public getOrElse(p: T): T {
    return p;
  }
  public filter(f: (p: T) => boolean): Maybe<T> {
    return this;
  }
  public chain<R>(f: (p: T) => Monads<R>): Nothing<R> {
    return new Nothing<R>();
  }
  public toString(): string {
    return 'Maybe.Nothing';
  }
}
