import { fork } from '../src/fork';

describe('fork', () => {
  // ジェネリクスによる型推論の確認をするためboolean,number,stringを織り交ぜた関数合成を行う。
  // 渡したタプルの0番を取り出す
  const f1 = (p: [boolean, number]) => p[0];
  // 渡したタプルの1番を取り出す
  const f2 = (p: [boolean, number]) => p[1];
  // - booleanがtrueなら、numberで渡した数の符号をそのままに、falseなら逆転させる。
  // - numberは2乗する。
  // - それを文字列に変換する。
  const join = (p1: boolean, p2: number) => (p2 * (p1 ? p2 : -p2)).toString();
  const forkFunc = fork(join, f1, f2);
  test('[true, 3] -> 9', () => expect(forkFunc([true, 3])).toEqual('9'));
  test('[false, 5] -> -25', () => expect(forkFunc([false, 5])).toEqual('-25'));
});
