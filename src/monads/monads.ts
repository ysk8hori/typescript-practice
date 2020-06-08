export default interface Monads<T> {
  map: <R>(f: (p: T) => R) => Monads<R>;
  get: () => T;
  join: <T1 = T extends Monads<unknown> ? unknown : T>() => Monads<T1>;
  toString: () => string;
}
