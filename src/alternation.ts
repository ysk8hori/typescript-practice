/**
 * # alternation
 *
 * ---
 *
 * _alternationコンビネータは、2個の関数を引数にとり、
 * 値が真（true）と判定される（false、null、undefinedのいずれでもない）場合、最初の関数の実行結果を返します。
 * 値が未定義の場合は、2番目の関数の結果を返します。_
 *
 * ---
 *
 * LuisAtencio,株式会社イディオマコムニカ 加藤大雄. JavaScript関数型プログラミング 複雑性を抑える発想と実践法を学ぶ (impress top gearシリーズ) (Japanese Edition) (Kindle の位置No.3021-3023). Kindle 版.
 *
 * @param f1 引数を一つ取る関数
 * @param f2 f1と同じ引数を一つ取り、f1と同じ返却値を返す関数
 */
export function alternation<P, R>(
  f1: (p: P) => R,
  f2: (p: P) => R
): (p: P) => R {
  return (p: P) => {
    const f1result = f1(p) ?? false;
    return f1result !== false ? f1result : f2(p);
  };
}
