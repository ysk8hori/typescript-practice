import Maybe from './maybe';
import Just from './just';
import Nothing from './nothing';

export function maybeFromNullable<T>(value: T | undefined | null): Maybe<T> {
  return value ? Just.of(value) : Nothing.of(value);
}
