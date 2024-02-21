export function capitalize<
  T extends Record<string, unknown> = Record<string, unknown>
>(str: string) {
  return (str[0].toUpperCase() + str.slice(1)) as keyof T | string;
}
