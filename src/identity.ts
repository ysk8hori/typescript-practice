export function identity<P>(): (p: P) => P {
  return (p: P) => p;
}
