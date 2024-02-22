export function capitalize<T>(str: string) {
  return (str[0].toUpperCase() + str.slice(1)) as T;
}
