import Monads from './monads';

/**
 * # IO
 *
 * ---
 *
 * _このIOモナドは、それ以外のモナドとは異なる動作をします。
 * 値の代わりに効果関数をラッピングしているのです。
 * 関数は、いうなれば計算されるのを待っている遅延評価される値とみなすことができることを思い出してください。
 * このモナドにより、DOM処理をまとめてチェーン化して、単一の「擬似的な」参照透過な処理として実行することが可能です。
 * その結果、副作用を生じさせる関数が、順不同に、あるいは呼び出しの間に実行されることがないように保証することが可能です。_
 *
 * ---
 *
 * LuisAtencio,株式会社イディオマコムニカ 加藤大雄. JavaScript関数型プログラミング 複雑性を抑える発想と実践法を学ぶ (impress top gearシリーズ) (Japanese Edition) (Kindle の位置No.3715-3719). Kindle 版.
 */
export default class IO<T> implements Monads<T> {
  private constructor(private effect: () => T) {}

  public static of<T>(a: T): IO<T> {
    return new IO(() => a);
  }
  public static from<T>(effect: () => T): IO<T> {
    return new IO(effect);
  }
  public map<R>(f: (p: T) => R): IO<R> {
    const self = this;
    return new IO(() => f(self.effect()));
  }
  public chain<R>(fn: (arg: T) => R): R {
    return fn(this.effect());
  }
  public run(): T {
    return this.effect();
  }
  // /**
  //  * @deprecated runまたはchainを使用してください。
  //  */
  // public get(): T {
  //   return this.run();
  // }
  // /**
  //  * @deprecated runまたはchainを使用してください。
  //  */
  // public join<T1 = T extends IO<unknown> ? unknown : T>(): IO<T1> {
  //   // @ts-ignore
  //   return IO.of(this.run());
  // }
  /**
   * @deprecated runが走ることに注意してください。
   */
  public toString(): string {
    return `IO(${this.run()})`;
  }
}
