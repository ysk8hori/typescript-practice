export function fork<P, R1, R2, R3>(
  join: (r1: R1, r2: R2) => R3,
  f1: (p: P) => R1,
  f2: (p: P) => R2
): (p: P) => R3 {
  return (p: P) => join(f1(p), f2(p));
}
