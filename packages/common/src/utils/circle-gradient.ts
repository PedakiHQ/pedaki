// Based on https://github.com/coffee-cup/gradient-avatars/blob/main/src/gradients.ts

import { hsl } from './colors';

const stringToColour = (): string => {
  const [hue, saturation, lightness] = hsl();
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const generateColours = (): [string, string] => {
  return [stringToColour(), stringToColour()];
};

export const generateSVG = (s: string, size = 256): string => {
  const [c1, c2] = generateColours();
  const rotate = Math.floor(Math.random() * 360);

  return `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="url(#gradient)"/>
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="${size}" y2="${size}" gradientUnits="userSpaceOnUse" gradientTransform="rotate(${rotate}deg)">
        <stop stop-color="${c1}" />
        <stop offset="1" stop-color="${c2}" />
    </linearGradient>
  </defs>
</svg>
  `.trim();
};

export const generateDataURL = (s: string, size = 256): string => {
  const svg = generateSVG(s, size);
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
};
