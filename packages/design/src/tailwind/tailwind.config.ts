import svgToDataUri from 'mini-svg-data-uri';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme.js';
// @ts-expect-error - no types
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette.js';
import plugin from 'tailwindcss/plugin.js';
import { createPlugin as radixPlugin } from 'windy-radix-palette';

const gridBackground = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      'bgi-grid': (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
        )}")`,
      }),
      'bgi-grid-dashed': (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><g><path d="M32 32L32.0001 0" stroke-dasharray="6 6"/><path d="M0 0L32 0.000198364" stroke-dasharray="6 6"/></g></svg>`,
        )}")`,
      }),
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
    { values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
  );
});

const radixColorsPlugin = radixPlugin({});

export default {
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '7.5rem',
        '2xl': '9rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
      colors: {},
    },
    extend: {
      backgroundColor: {
        primary: 'rgb(var(--background-primary) / <alpha-value>)',
        secondary: 'rgb(var(--background-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--background-tertiary) / <alpha-value>)',
        border: 'var(--border)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
      },
      borderColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        border: 'var(--border)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      ringOffsetColor: {
        'bg-primary': 'rgb(var(--background-primary) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        outline: 'var(--shadow-outline) 0 0 0 6px',
        'outline-lg': 'var(--shadow-outline) 0 0 0 8px',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), gridBackground, radixColorsPlugin.plugin],
} satisfies Omit<Config, 'content'>;
