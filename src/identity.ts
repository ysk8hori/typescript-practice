/**
 * # identity
 *
 * ---
 *
 * _identityコンビネータは、与えられた引数と同じ値を返す関数です。_
 *
 * ---
 *
 * LuisAtencio,株式会社イディオマコムニカ 加藤大雄. JavaScript関数型プログラミング 複雑性を抑える発想と実践法を学ぶ (impress top gearシリーズ) (Japanese Edition) (Kindle の位置No.2990). Kindle 版.
 */
export function identity<P>(): (p: P) => P {
  return (p: P) => p;
}
