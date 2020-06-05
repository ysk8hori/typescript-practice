export function alternation<P, R>(
  f1: (p: P) => R,
  f2: (p: P) => R
): (p: P) => R {
  return (p: P) => {
    const f1result = f1(p) ?? false;
    return f1result !== false ? f1result : f2(p);
  };
}
