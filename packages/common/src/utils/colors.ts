import { hash256 } from './hash';

export const hslSeed = (seed: string): [number, number, number] => {
  const hash = hash256(seed);

  const hue = parseInt(hash.substring(0, 8), 16) % 359;
  const saturation = 35 + (parseInt(hash.substring(8, 16), 16) % 65);
  const lightness = 35 + (parseInt(hash.substring(16, 24), 16) % 65);

  return [hue, saturation, lightness];
};

export const hsl = (): [number, number, number] => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 35 + Math.floor(Math.random() * 65);
  const lightness = 35 + Math.floor(Math.random() * 65);

  return [hue, saturation, lightness];
};

export const hexToRgb = (hex: string): [number, number, number] | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? [
        parseInt(result?.[1] ?? 'FF', 16),
        parseInt(result?.[2] ?? 'FF', 16),
        parseInt(result?.[3] ?? 'FF', 16),
      ]
    : null;
};

export const isDark = (rgb: [number, number, number]): boolean => {
  const [r, g, b] = rgb;

  return (r * 299 + g * 587 + b * 114) / 1000 < 128;
};
