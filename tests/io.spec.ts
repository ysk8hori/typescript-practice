import IO from '../src/monads/io';
type SampleObj = { a: string; b?: number };

describe('IOモナド', () => {
  describe('of〜map〜run', () => {
    const read = (obj: SampleObj) => () => obj.a;
    const write = (obj: SampleObj) => (a: string) => (obj.a = a);
    test('run前の状態', () => {
      const obj: SampleObj = { a: 'Hello' };
      const io = IO.of(read(obj)())
        .map((_) => _.toUpperCase())
        .map((_) => _ + ' world!')
        .map(write(obj));
      expect(obj.a).toEqual('Hello');
    });
    test('run後の状態', () => {
      const obj: SampleObj = { a: 'Hello' };
      const io = IO.of(read(obj)())
        .map((_) => _.toUpperCase())
        .map((_) => _ + ' world!')
        .map(write(obj));
      io.run();
      expect(obj.a).toEqual('HELLO world!');
    });
  });
  describe('mapで型を変更', () => {
    const read = (obj: SampleObj) => () => obj.a;
    const write = (obj: SampleObj) => (b: number) => (obj.b = b);
    test('run前', () => {
      const obj: SampleObj = { a: '1' };
      const io = IO.of(read(obj)())
        .map((_) => _.toUpperCase())
        .map((_) => Number.parseInt(_))
        .map((_) => ++_)
        .map(write(obj));
      expect(obj.a).toEqual('1');
      expect(obj.b).toBeUndefined();
    });
    test('run後', () => {
      const obj: SampleObj = { a: '1' };
      const io = IO.of(read(obj)())
        .map((_) => _.toUpperCase())
        .map((_) => Number.parseInt(_))
        .map((_) => ++_)
        .map(write(obj));
      io.run();
      expect(obj.a).toEqual('1');
      expect(obj.b).toBe(2);
    });
  });
});
