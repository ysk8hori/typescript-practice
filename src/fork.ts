/**
 * # fork
 *
 * ---
 *
 * _forkコンビネータは、1個のリソースを2通りの異なる方法で処理して、その結果を結合するのに便利な関数です。
 * forkコンビネータは3個の関数をとります。その3個は、join関数と、提供された入力を処理する2個のterminal関数です。_
 *
 * ---
 *
 * LuisAtencio,株式会社イディオマコムニカ 加藤大雄. JavaScript関数型プログラミング 複雑性を抑える発想と実践法を学ぶ (impress top gearシリーズ) (Japanese Edition) (Kindle の位置No.3055-3057). Kindle 版.
 *
 * @param join
 * @param terminal1
 * @param terminal2
 */
export function fork<P, R1, R2, R3>(
  join: (r1: R1, r2: R2) => R3,
  terminal1: (p: P) => R1,
  terminal2: (p: P) => R2
): (p: P) => R3 {
  return (p: P) => join(terminal1(p), terminal2(p));
}
