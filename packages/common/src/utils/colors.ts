export const hsl = (): [number, number, number] => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 35 + Math.floor(Math.random() * 65);
  const lightness = 35 + Math.floor(Math.random() * 65);

  return [hue, saturation, lightness];
};

export const hexToRgb = (hex: string): [number, number, number] | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result && result.length === 4
    ? [parseInt(result[1]!, 16), parseInt(result[2]!, 16), parseInt(result[3]!, 16)]
    : null;
};

export const isDark = (rgb: [number, number, number]): boolean => {
  const [r, g, b] = rgb;

  return (r * 299 + g * 587 + b * 114) / 1000 < 128;
};