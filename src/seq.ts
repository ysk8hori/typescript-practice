/**
 * # seq
 *
 * ---
 *
 * _seqコンビネータは、一連の複数の関数をループするために使用される関数です。
 * seqコンビネータは、2個以上の関数を引数にとり、新しい関数を返します。
 * 新しい関数は、引数で与えられたすべての関数を、同じ値に対して順次実行します。_
 *
 * ---
 *
 * LuisAtencio,株式会社イディオマコムニカ 加藤大雄. JavaScript関数型プログラミング 複雑性を抑える発想と実践法を学ぶ (impress top gearシリーズ) (Japanese Edition) (Kindle の位置No.3040-3042). Kindle 版.
 * @param functioins
 */
export function seq<P>(...functioins: Array<(p: P) => any>): (p: P) => void {
  return (p: P) => functioins.forEach((_) => _(p));
}
