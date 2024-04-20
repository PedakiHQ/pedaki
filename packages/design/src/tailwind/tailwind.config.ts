import svgToDataUri from "mini-svg-data-uri";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme.js";
// @ts-expect-error - no types
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette.js";
import plugin from "tailwindcss/plugin.js";

const gridBackground = plugin(({ matchUtilities, theme }) => {
	matchUtilities(
		{
			"bgi-grid": (value: string) => ({
				backgroundImage: `url("${svgToDataUri(
					`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
				)}")`,
			}),
			"bgi-grid-dashed": (value: string) => ({
				backgroundImage: `url("${svgToDataUri(
					`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><g><path d="M32 32L32.0001 0" stroke-dasharray="6 6"/><path d="M0 0L32 0.000198364" stroke-dasharray="6 6"/></g></svg>`,
				)}")`,
			}),
		},
		{ values: flattenColorPalette(theme("backgroundColor")), type: "color" },
	);
});

export default {
	darkMode: ["class"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "7.5rem",
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1400px",

				tall: { raw: "(min-height: 800px)" },
			},
		},
		colors: {
			transparent: "transparent",

			white: "rgb(255 255 255 / <alpha-value>)",
			"neutral-0": "rgb(255 255 255 / <alpha-value>)",
			"neutral-100": "rgb(249 249 249 / <alpha-value>)",
			"neutral-200": "rgb(226 228 233 / <alpha-value>)",
			"neutral-300": "rgb(205 208 213 / <alpha-value>)",
			"neutral-400": "rgb(134 140 152 / <alpha-value>)",
			"neutral-500": "rgb(82 88 102 / <alpha-value>)",
			"neutral-600": "rgb(49 53 63 / <alpha-value>)",
			"neutral-700": "rgb(32 35 45 / <alpha-value>)",
			"neutral-800": "rgb(22 25 34 / <alpha-value>)",
			"neutral-900": "rgb(10 13 20 / <alpha-value>)",
			black: "rgb(10 13 20 / <alpha-value>)",

			"blue-base": "rgb(55 93 251 / <alpha-value>)",
			"blue-dark": "rgb(37 62 167 / <alpha-value>)",
			"blue-darker": "rgb(22 38 100 / <alpha-value>)",
			"blue-light": "rgb(194 214 255 / <alpha-value>)",
			"blue-lighter": "rgb(235 241 255 / <alpha-value>)",

			"green-base": "rgb(56 199 147 / <alpha-value>)",
			"green-dark": "rgb(45 159 117 / <alpha-value>)",
			"green-darker": "rgb(23 100 72 / <alpha-value>)",
			"green-light": "rgb(203 245 229 / <alpha-value>)",
			"green-lighter": "rgb(239 250 246 / <alpha-value>)",

			"orange-base": "rgb(241 123 44 / <alpha-value>)",
			"orange-dark": "rgb(194 84 10 / <alpha-value>)",
			"orange-darker": "rgb(110 51 12 / <alpha-value>)",
			"orange-light": "rgb(255 218 194 / <alpha-value>)",
			"orange-lighter": "rgb(254 243 235 / <alpha-value>)",

			"pink-base": "rgb(226 85 242 / <alpha-value>)",
			"pink-dark": "rgb(156 35 169 / <alpha-value>)",
			"pink-darker": "rgb(98 15 108 / <alpha-value>)",
			"pink-light": "rgb(249 194 255 / <alpha-value>)",
			"pink-lighter": "rgb(253 235 255 / <alpha-value>)",

			"purple-base": "rgb(110 63 243 / <alpha-value>)",
			"purple-dark": "rgb(90 54 191 / <alpha-value>)",
			"purple-darker": "rgb(43 22 100 / <alpha-value>)",
			"purple-light": "rgb(202 194 255 / <alpha-value>)",
			"purple-lighter": "rgb(238 235 255 / <alpha-value>)",

			"red-base": "rgb(223 28 65 / <alpha-value>)",
			"red-dark": "rgb(175 29 56 / <alpha-value>)",
			"red-darker": "rgb(113 14 33 / <alpha-value>)",
			"red-light": "rgb(248 201 210 / <alpha-value>)",
			"red-lighter": "rgb(253 237 240 / <alpha-value>)",

			"teal-base": "rgb(53 185 233 / <alpha-value>)",
			"teal-dark": "rgb(31 135 173 / <alpha-value>)",
			"teal-darker": "rgb(22 69 100 / <alpha-value>)",
			"teal-light": "rgb(194 239 255 / <alpha-value>)",
			"teal-lighter": "rgb(235 250 255 / <alpha-value>)",

			"yellow-base": "rgb(242 174 64 / <alpha-value>)",
			"yellow-dark": "rgb(180 120 24 / <alpha-value>)",
			"yellow-darker": "rgb(105 61 17 / <alpha-value>)",
			"yellow-light": "rgb(251 223 177 / <alpha-value>)",
			"yellow-lighter": "rgb(254 247 236 / <alpha-value>)",

			"state-away": "var(--tw-yellow-base)",
			"state-error": "var(--tw-red-base)",
			"state-feature": "var(--tw-purple-base)",
			"state-information": "var(--tw-blue-base)",
			"state-neutral": "var(--tw-neutral-400)",
			"state-success": "var(--tw-green-base)",
			"state-verified": "var(--tw-teal-base)",
			"state-warning": "var(--tw-orange-base)",

			"stroke-disabled": "var(--tw-neutral-100)",
			"stroke-soft": "var(--tw-neutral-200)",
			"stroke-strong": "var(--tw-neutral-900)",
			"stroke-sub": "var(--tw-neutral-300)",
			"stroke-white": "var(--tw-neutral-0)",

			"shadow-stroke-important": "rgba(55, 93, 251, 0.08)", // 'var(--tw-neutral-500) / 0.08',
			"shadow-stroke-primary": "rgba(241, 123, 44, 0.08)", // 'var(--tw-orange-base) / 0.08',
			"shadow-stroke-error": "rgba(233, 53, 53, 0.08)",

			"shadow-focus-important": "var(--tw-neutral-200)",
			"shadow-focus-primary": "var(--tw-neutral-100)",
			"shadow-focus-error": "rgba(255, 236, 235, 1)",

			// 'primary-base': 'var(--tw-orange-base)',
			"primary-base": "rgb(241 123 44 / <alpha-value>)",
			// 'primary-dark': 'var(--tw-orange-dark)',
			"primary-dark": "rgb(194 84 10 / <alpha-value>)",
			// 'primary-darker': 'var(--tw-orange-darker)',
			"primary-darker": "rgb(110 51 12 / <alpha-value>)",
			// 'primary-light': 'var(--tw-orange-light)',
			"primary-light": "rgb(255 218 194 / <alpha-value>)",
			// 'primary-lighter': 'var(--tw-orange-lighter)',
			"primary-lighter": "rgb(254 243 235 / <alpha-value>)",

			textMain: "var(--tw-neutral-900)",
			textSub: "var(--tw-neutral-500)",
			textSoft: "var(--tw-neutral-400)",
			textDisabled: "var(--tw-neutral-300)",
		},
		fontSize: {
			"title-1": [
				"56px",
				{
					letterSpacing: "-0.001em",
					lineHeight: "64px",
				},
			],
			"title-2": [
				"48px",
				{
					letterSpacing: "-0.001em",
					lineHeight: "56px",
				},
			],
			"title-3": [
				"40px",
				{
					letterSpacing: "-0.001em",
					lineHeight: "48px",
				},
			],
			"title-4": [
				"32px",
				{
					letterSpacing: "0",
					lineHeight: "40px",
				},
			],
			"title-5": [
				"24px",
				{
					letterSpacing: "0",
					lineHeight: "32px",
				},
			],
			"title-6": [
				"20px",
				{
					letterSpacing: "0",
					lineHeight: "28px",
				},
			],
			//
			"label-xl": [
				"24px",
				{
					letterSpacing: "-0.0015em",
					lineHeight: "32px",
				},
			],
			"label-lg": [
				"18px",
				{
					letterSpacing: "-0.0015em",
					lineHeight: "24px",
				},
			],
			"label-md": [
				"16px",
				{
					letterSpacing: "-0.0011em",
					lineHeight: "24px",
				},
			],
			"label-sm": [
				"14px",
				{
					letterSpacing: "-0.006em",
					lineHeight: "20px",
				},
			],
			"label-xs": [
				"12px",
				{
					letterSpacing: "0",
					lineHeight: "16px",
				},
			],
			//
			"p-xl": [
				"24px",
				{
					letterSpacing: "-0.0015em",
					lineHeight: "32px",
				},
			],
			"p-lg": [
				"18px",
				{
					letterSpacing: "-0.0015em",
					lineHeight: "24px",
				},
			],
			"p-md": [
				"16px",
				{
					letterSpacing: "-0.0011em",
					lineHeight: "24px",
				},
			],
			"p-sm": [
				"14px",
				{
					letterSpacing: "-0.006em",
					lineHeight: "20px",
				},
			],
			"p-xs": [
				"12px",
				{
					letterSpacing: "0",
					lineHeight: "16px",
				},
			],
			//
			"sub-md": [
				"16px",
				{
					letterSpacing: "0.006em",
					lineHeight: "24px",
				},
			],
			"sub-sm": [
				"14px",
				{
					letterSpacing: "0.006em",
					lineHeight: "20px",
				},
			],
			"sub-xs": [
				"12px",
				{
					letterSpacing: "0.004em",
					lineHeight: "16px",
				},
			],
			"sub-2xs": [
				"11px",
				{
					letterSpacing: "0.002em",
					lineHeight: "12px",
				},
			],
		},
		extend: {
			transitionProperty: {
				height: "height",
				spacing: "margin, padding",
			},
			backgroundColor: {
				success: "var(--tw-state-success)",
				warning: "var(--tw-state-warning)",
				error: "var(--tw-state-error)",
				feature: "var(--tw-state-feature)",
				neutral: "var(--tw-state-neutral)",
				information: "var(--tw-state-information)",
				verified: "var(--tw-state-verified)",
				away: "var(--tw-state-away)",

				// 'soft': 'var(--tw-neutral-200)',
				soft: "rgb(226 228 233 / <alpha-value>)",
				// 'strong': 'var(--tw-neutral-900)',
				strong: "rgb(10 13 20 / <alpha-value>)",
				// 'surface': 'var(--tw-neutral-700)',
				surface: "rgb(32 35 45 / <alpha-value>)",
				// 'weak': 'var(--tw-neutral-100)',
				weak: "rgb(249 249 249 / <alpha-value>)",
				// 'white': 'var(--tw-white)',
				white: "rgb(255 255 255 / <alpha-value>)",

				border: "var(--tw-stroke-soft)",
			},
			textColor: {
				main: "var(--tw-neutral-900)",
				sub: "var(--tw-neutral-500)",
				soft: "var(--tw-neutral-400)",
				disabled: "var(--tw-neutral-300)",
				white: "var(--tw-neutral-0)",
			},
			borderColor: {
				disabled: "var(--tw-stroke-disabled)",
				white: "var(--tw-stroke-white)",
				sub: "var(--tw-stroke-sub)",
				strong: "var(--tw-stroke-strong)",
				border: "var(--tw-stroke-soft)",

				success: "var(--tw-state-success)",
				warning: "var(--tw-state-warning)",
				error: "var(--tw-state-error)",
				feature: "var(--tw-state-feature)",
				neutral: "var(--tw-state-neutral)",
				information: "var(--tw-state-information)",
				verified: "var(--tw-state-verified)",
				away: "var(--tw-state-away)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
				mono: ["var(--font-mono)", ...fontFamily.mono],
			},
			boxShadow: {
				strokeImportant: "0 1px 3px 0 var(--tw-shadow-stroke-important)",
				strokePrimary: "0 1px 2px 0 var(--tw-shadow-stroke-primary)",
				strokeError: "0 1px 2px 0 var(--tw-shadow-stroke-error)",
				focusImportant:
					"0 0 0 2px var(--tw-shadow-focus-important), 0 0 0 4px var(--tw-shadow-focus-important)",
				focusPrimary:
					"0 0 0 2px var(--tw-shadow-focus-primary), 0 0 0 4px var(--tw-shadow-focus-primary)",
				focusError:
					"0 0 0 2px var(--tw-shadow-focus-error), 0 0 0 4px var(--tw-shadow-focus-error)",

				outline: "var(--tw-shadow-stroke-primary) 0 0 0 6px",
				"outline-lg": "var(--tw-shadow-stroke-primary) 0 0 0 8px",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"collapsible-down": {
					from: { height: "0" },
					to: { height: "var(--radix-collapsible-content-height)" },
				},
				"collapsible-up": {
					from: { height: "var(--radix-collapsible-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"collapsible-down": "collapsible-down 0.2s ease-out",
				"collapsible-up": "collapsible-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		gridBackground,
		require("@tailwindcss/container-queries"),
	],
} satisfies Omit<Config, "content">;
