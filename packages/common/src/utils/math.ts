export const clamp = (value: number, min: number, max: number) => {
  return Math.max(Math.min(value, max), min);
};

export const parseIntOr = (value: unknown, defaultValue: number) => {
  if (typeof value === 'number' && !isNaN(value)) return value;
  if (value === null || typeof value != 'string') return defaultValue;
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    return defaultValue;
  }
  return parsed;
};
