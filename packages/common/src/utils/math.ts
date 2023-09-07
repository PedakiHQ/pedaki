export const clamp = (value: number, min: number, max: number) => {
  return Math.max(Math.min(value, max), min);
};

export const parseIntOr = (value: string | null, defaultValue: number) => {
  if (value === null) return defaultValue;
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    return defaultValue;
  }
  return parsed;
};
