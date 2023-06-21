export function searchSubstring(array: string[], substring: string): string[] {
  const results: string[] = [];

  for (const str of array) {
    if (str.includes(substring)) {
      results.push(str);
    }
  }

  return results;
}
