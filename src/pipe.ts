const defaultFunction = (p: any) => p;

export const pipe = <
  F extends (...args: any[]) => T0,
  T0 = ReturnType<F>,
  T1 = T0,
  T2 = T1,
  T3 = T2,
  T4 = T3,
  T5 = T4,
  T6 = T5,
  T7 = T6,
  T8 = T7,
  T9 = T8
>(
  f0: F,
  f1: (p: T0) => T1 = defaultFunction,
  f2: (p: T1) => T2 = defaultFunction,
  f3: (p: T2) => T3 = defaultFunction,
  f4: (p: T3) => T4 = defaultFunction,
  f5: (p: T4) => T5 = defaultFunction,
  f6: (p: T5) => T6 = defaultFunction,
  f7: (p: T6) => T7 = defaultFunction,
  f8: (p: T7) => T8 = defaultFunction,
  f9: (p: T8) => T9 = defaultFunction
) => (...p: Parameters<F>) => f9(f8(f7(f6(f5(f4(f3(f2(f1(f0(...p))))))))));
