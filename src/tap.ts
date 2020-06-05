/**
 * # tap
 *
 * ---
 *
 * _tapコンビネータは、void型関数（ファイルやHTMLページへのログあるいは書き出しを行う関数）を、合成に対して橋渡しするのに極めて便利な関数です。_
 *
 * ---
 *
 * LuisAtencio,株式会社イディオマコムニカ 加藤大雄. JavaScript関数型プログラミング 複雑性を抑える発想と実践法を学ぶ (impress top gearシリーズ) (Japanese Edition) (Kindle の位置No.3000-3002). Kindle 版.
 *
 * @param f
 */
export function tap<T>(f: (p: T) => any): (p: T) => T {
  return (p: T) => {
    f(p);
    return p;
  };
}
