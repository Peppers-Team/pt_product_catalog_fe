export function getPagesCount(from: number, to: number) {
  const numbers: number[] = [];

  for (let i = from; i <= to; i += 1) {
    numbers.push(i);
  }

  return numbers;
}
