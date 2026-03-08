export function capitalize(value: string): string {
  if (!value || typeof value !== "string") return "";

  return value
    .trim()
    .split(/\s+/)
    .map(word => {
      if (!word) return "";

      const first = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();

      return first + rest;
    })
    .join(" ");
}