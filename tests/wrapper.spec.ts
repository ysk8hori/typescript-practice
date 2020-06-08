import Wrapper from '../src/monads/wrapper';
describe('wrapper', () => {
  test('number', () => {
    const wrapper1 = Wrapper.of(2);
    expect(wrapper1.toString()).toEqual('Wrapper(2)');
    expect(wrapper1.get()).toBe(2);
    expect(wrapper1.map((_) => ++_).get()).toBe(3);
    expect(wrapper1.get()).toBe(2);
    expect(wrapper1.join().toString()).toEqual('Wrapper(2)');
  });
  test('Wrapper(2)', () => {
    const wrapper1 = Wrapper.of(Wrapper.of(2));
    expect(wrapper1.toString()).toEqual('Wrapper(Wrapper(2))');
    expect(wrapper1.get().toString()).toEqual('Wrapper(2)');
    expect(wrapper1.map((_) => Wrapper.of(3)).toString()).toEqual(
      'Wrapper(Wrapper(3))'
    );
    expect(wrapper1.join<number>().toString()).toEqual('Wrapper(2)');
  });
});
