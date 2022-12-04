export function mod(num: number, limit: number): number {
  return ((num % limit) + limit) % limit;
}
