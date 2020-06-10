import Monads from './monads';
import Nothing from './nothing';

export default interface Maybe<T> extends Monads<T> {
  isNothing(): boolean;
  isJust(): boolean;
  map<R>(f: (p: T) => R): Maybe<R>;
  getOrElse(p: T): T;
  filter(f: (p: T) => boolean): Maybe<T>;
  chain<R>(f: (p: T) => Monads<R>): Monads<R> | Nothing<R>;
  toString(): string;
}
