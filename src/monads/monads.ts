export default interface Monads<T> {
  map: <R>(f: (p: T) => R) => Monads<R>;
  toString: () => string;
}
