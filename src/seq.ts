export function seq<P>(...functioins: Array<(p: P) => void>): (p: P) => void {
  return (p: P) => functioins.forEach((_) => _(p));
}
