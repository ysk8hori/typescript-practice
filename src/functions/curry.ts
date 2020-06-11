// 以下の記事からJavaScriptコードを拝借し、型情報を付加しました。
// 引用元：https://qiita.com/ttatsf/items/cf21381a386c89247200

//カリー化の元になる再帰関数。
//引数が足りないなら引数を後に加えます  curryS = f =>(...xs)=> y => curryS(f)(...xs, y)
//足りていれば引数をそのまま適用       curryS = f =>(...xs)=> f(...xs)
const curryS = (f: (...args: any[]) => any) => (...xs: any[]) =>
  xs.length < f.length ? (y: any[]) => curryS(f)(...xs, y) : f(...xs);

export function curry<R>(f: () => R): () => R;
export function curry<P1, R>(f: (p1: P1) => R): (p1: P1) => R;
export function curry<P1, P2, R>(
  f: (p1: P1, p2: P2) => R
): (p1: P1) => (p2: P2) => R;
export function curry<P1, P2, P3, R>(
  f: (p1: P1, p2: P2, p3: P3) => R
): (p1: P1) => (p2: P2) => (p3: P3) => R;
export function curry<P1, P2, P3, P4, R>(
  f: (p1: P1, p2: P2, p3: P3, p4: P4) => R
): (p1: P1) => (p2: P2) => (p3: P3) => (p4: P4) => R;
export function curry<P1, P2, P3, P4, P5, R>(
  f: (p1: P1, p2: P2, p3: P3, p4: P4, p5: P5) => R
): (p1: P1) => (p2: P2) => (p3: P3) => (p4: P4) => (p5: P5) => R;
export function curry<P1, P2, P3, P4, P5, R>(
  f: (p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, ...args: any) => R
): (p1: P1) => (p2: P2) => (p3: P3) => (p4: P4) => (p5: P5) => any;
export function curry(f: (...args: any[]) => any): (...arg: any[]) => any;
//fをカリー化する関数。
//fに引数がないならfを返す  curry = f => f
//fに引数があるなら最初の実引数なしでcurryS(f)に適用  curry = f => curryS( f )()
export function curry(f: (...args: any[]) => any): (...arg: any[]) => any {
  return f.length === 0 ? f : curryS(f)();
}
