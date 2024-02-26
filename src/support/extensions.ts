/* prefix value of n with a 0 (used to format date) */
export function prefixDateValue(n: number): string {
  if (n.toString().length < 2) {
    return `0${n.toString()}`
  }
  return n.toString()
}