type EnumKeys<T> = Extract<keyof T, string>;

export function getEnumKeys<T extends Record<string, K>, K>(
  e: T
): EnumKeys<T>[] {
  return Object.keys(e!).filter((key) => isNaN(Number(key))) as EnumKeys<T>[];
}

export function getEnumValues<T extends Record<string, K>, K>(
  e: T
): T[keyof T][] {
  const keys = Object.keys(e).filter((key) =>
    isNaN(Number(key))
  ) as EnumKeys<T>[];
  return keys.map((key) => e[key]);
}
