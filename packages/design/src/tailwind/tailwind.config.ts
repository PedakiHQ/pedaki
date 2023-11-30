import svgToDataUri from 'mini-svg-data-uri';
import type {Config} from 'tailwindcss';
import {fontFamily} from 'tailwindcss/defaultTheme.js';
// @ts-expect-error - no types
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette.js';
import plugin from 'tailwindcss/plugin.js';

const gridBackground = plugin(({matchUtilities, theme}) => {
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
        {values: flattenColorPalette(theme('backgroundColor')), type: 'color'},
    );
});

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
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1400px',
            },
        },
        colors: {
            'neutral-0': 'rgb(255, 255, 255)',
            'neutral-100': 'rgb(246, 248, 250)',
            'neutral-200': 'rgb(226, 228, 233)',
            'neutral-300': 'rgb(205, 208, 213)',
            'neutral-400': 'rgb(134, 140, 152)',
            'neutral-500': 'rgb(82, 88, 102)',
            'neutral-600': 'rgb(49, 53, 63)',
            'neutral-700': 'rgb(32, 35, 45)',
            'neutral-800': 'rgb(22, 25, 34)',
            'neutral-900': 'rgb(10, 13, 20)',

            'blue-base': 'rgb(55, 93, 251)',
            'blue-dark': 'rgb(37, 62, 167)',
            'blue-darker': 'rgb(22, 38, 100)',
            'blue-light': 'rgb(194, 214, 255)',
            'blue-lighter': 'rgb(235, 241, 255)',

            'green-base': 'rgb(56, 199, 147)',
            'green-dark': 'rgb(45, 159, 117)',
            'green-darker': 'rgb(23, 100, 72)',
            'green-light': 'rgb(203, 245, 229)',
            'green-lighter': 'rgb(239, 250, 246)',

            'orange-base': 'rgb(241, 123, 44)',
            'orange-dark': 'rgb(194, 84, 10)',
            'orange-darker': 'rgb(110, 51, 12)',
            'orange-light': 'rgb(255, 218, 194)',
            'orange-lighter': 'rgb(254, 243, 235)',

            'pink-base': 'rgb(226, 85, 242)',
            'pink-dark': 'rgb(156, 35, 169)',
            'pink-darker': 'rgb(98, 15, 108)',
            'pink-light': 'rgb(249, 194, 255)',
            'pink-lighter': 'rgb(253, 235, 255)',

            'purple-base': 'rgb(110, 63, 243)',
            'purple-dark': 'rgb(90, 54, 191)',
            'purple-darker': 'rgb(43, 22, 100)',
            'purple-light': 'rgb(202, 194, 255)',
            'purple-lighter': 'rgb(238, 235, 255)',

            'red-base': 'rgb(223, 28, 65)',
            'red-dark': 'rgb(175, 29, 56)',
            'red-darker': 'rgb(113, 14, 33)',
            'red-light': 'rgb(248, 201, 210)',
            'red-lighter': 'rgb(253, 237, 240)',

            'teal-base': 'rgb(53, 185, 233)',
            'teal-dark': 'rgb(31, 135, 173)',
            'teal-darker': 'rgb(22, 69, 100)',
            'teal-light': 'rgb(194, 239, 255)',
            'teal-lighter': 'rgb(235, 250, 255)',

            'yellow-base': 'rgb(242, 174, 64)',
            'yellow-dark': 'rgb(180, 120, 24)',
            'yellow-darker': 'rgb(105, 61, 17)',
            'yellow-light': 'rgb(251, 223, 177)',
            'yellow-lighter': 'rgb(254, 247, 236)',

            'bg-soft-200': 'var(--tw-neutral-200)',
            'bg-strong-900': 'var(--tw-neutral-900)',
            'bg-surface-700': 'var(--tw-neutral-700)',
            'bg-weak-100': 'var(--tw-neutral-100)',
            'bg-white-0': 'var(--tw-neutral-0)',

            'icon-disabled-300': 'var(--tw-neutral-300)',
            'icon-soft-400': 'var(--tw-neutral-400)',
            'icon-strong-900': 'var(--tw-neutral-900)',
            'icon-sub-500': 'var(--tw-neutral-500)',
            'icon-white-0': 'var(--tw-neutral-0)',

            'state-away': 'var(--tw-yellow-base)',
            'state-error': 'var(--tw-red-base)',
            'state-feature': 'var(--tw-purple-base)',
            'state-information': 'var(--tw-blue-base)',
            'state-neutral': 'var(--tw-neutral-400)',
            'state-success': 'var(--tw-green-base)',
            'state-verified': 'var(--tw-teal-base)',
            'state-warning': 'var(--tw-orange-base)',

            'stroke-disabled-100': 'var(--tw-neutral-100)',
            'stroke-soft-200': 'var(--tw-neutral-200)',
            'stroke-strong-900': 'var(--tw-neutral-900)',
            'stroke-sub-300': 'var(--tw-neutral-300)',
            'stroke-white-0': 'var(--tw-neutral-0)',

            'shadow-stroke-important': 'var(--tw-neutral-500) / 0.06',
            'shadow-stroke-primary': 'var(--tw-primary-base) / 0.08',
            'shadow-stroke-error': 'rgba(233, 53, 53, 0.08)',

            'shadow-focus-important': "var(--tw-neutral-200)",
            'shadow-focus-primary': "var(--tw-neutral-100)",
            'shadow-focus-error': "rgba(255, 236, 235, 1)",

            'text-disabled-300': 'var(--tw-neutral-300)',
            'text-main-900': 'var(--tw-neutral-900)',
            'text-soft-400': 'var(--tw-neutral-400)',
            'text-sub-500': 'var(--tw-neutral-500)',
            'text-white-0': 'var(--tw-neutral-0)',

            'primary-base': 'var(--tw-orange-base)',
            'primary-dark': 'var(--tw-orange-dark)',
            'primary-darker': 'var(--tw-orange-darker)',
            'primary-light': 'var(--tw-orange-light)',
            'primary-lighter': 'var(--tw-orange-lighter)',
        },
        extend: {
            backgroundColor: {
                success: 'var(--tw-state-success)',
                warning: 'var(--tw-state-warning)',
                error: 'var(--tw-state-error)',
                feature: 'var(--tw-state-feature)',
                neutral: 'var(--tw-state-neutral)',
                information: 'var(--tw-state-information)',
                verified: 'var(--tw-state-verified)',
                away: 'var(--tw-state-away)',
            },
            textColor: {
                main: 'var(--tw-neutral-900)',
                sub: 'var(--tw-neutral-500)',
                soft: 'var(--tw-neutral-400)',
                disabled: 'var(--tw-neutral-300)',
                white: 'var(--tw-neutral-0)',
            },
            borderColor: {
                disabled: 'var(--tw-stroke-disabled-100)',
                white: 'var(--tw-stroke-white-0)',
                sub: 'var(--tw-stroke-sub-300)',
                strong: 'var(--tw-stroke-strong-900)',
                border: 'var(--tw-stroke-soft-200)',

                success: 'var(--tw-state-success)',
                warning: 'var(--tw-state-warning)',
                error: 'var(--tw-state-error)',
                feature: 'var(--tw-state-feature)',
                neutral: 'var(--tw-state-neutral)',
                information: 'var(--tw-state-information)',
                verified: 'var(--tw-state-verified)',
                away: 'var(--tw-state-away)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans],
                mono: ['var(--font-mono)', ...fontFamily.mono],
            },
            boxShadow: {
                strokeImportant: '0 1px 3px 0 var(--tw-shadow-stroke-important)',
                strokePrimary: '0 1px 2px 0 var(--tw-shadow-stroke-primary)',
                strokeError: '0 1px 2px 0 var(--tw-shadow-stroke-error)',
                focusImportant: '0 0 0 2px var(--tw-shadow-focus-important), 0 0 0 4px var(--tw-shadow-focus-important)',
                focusPrimary: '0 0 0 2px var(--tw-shadow-focus-primary), 0 0 0 4px var(--tw-shadow-focus-primary)',
                focusError: '0 0 0 2px var(--tw-shadow-focus-error), 0 0 0 4px var(--tw-shadow-focus-error)',
            },
            keyframes: {
                'accordion-down': {
                    from: {height: '0'},
                    to: {height: 'var(--radix-accordion-content-height)'},
                },
                'accordion-up': {
                    from: {height: 'var(--radix-accordion-content-height)'},
                    to: {height: '0'},
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate'), gridBackground],
} satisfies Omit<Config, 'content'>;
