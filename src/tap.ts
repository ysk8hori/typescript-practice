export function tap<T>(f: (p: T) => any): (p: T) => T {
  return (p: T) => {
    f(p);
    return p;
  };
}
