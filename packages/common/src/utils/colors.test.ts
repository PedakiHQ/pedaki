import { describe, expect, test } from "vitest";
import { hexToRgb, hsl, isDark } from "./colors.ts";

describe("hsl", () => {
	test("generate a random hsl color", () => {
		const [hue, saturation, lightness] = hsl();

		expect(hue).toBeGreaterThanOrEqual(0);
		expect(hue).toBeLessThanOrEqual(360);

		expect(saturation).toBeGreaterThanOrEqual(35);
		expect(saturation).toBeLessThanOrEqual(100);

		expect(lightness).toBeGreaterThanOrEqual(35);
		expect(lightness).toBeLessThanOrEqual(100);
	});
});

describe("hexToRgb", () => {
	test("convert a hex color to rgb", () => {
		expect(hexToRgb("#000000")).toEqual([0, 0, 0]);
		expect(hexToRgb("#FFFFFF")).toEqual([255, 255, 255]);
		expect(hexToRgb("#FF0000")).toEqual([255, 0, 0]);
		expect(hexToRgb("#00FF00")).toEqual([0, 255, 0]);
		expect(hexToRgb("#0000FF")).toEqual([0, 0, 255]);
		expect(hexToRgb("#FF00FF")).toEqual([255, 0, 255]);
		expect(hexToRgb("#00FFFF")).toEqual([0, 255, 255]);
		expect(hexToRgb("#FFFF00")).toEqual([255, 255, 0]);
	});

	test("return null if the hex color is invalid", () => {
		expect(hexToRgb("#000")).toBeNull();
	});
});

describe("isDark", () => {
	test("determine if a color is dark", () => {
		expect(isDark([0, 0, 0])).toBe(true);
		expect(isDark([255, 255, 255])).toBe(false);
		expect(isDark([255, 0, 0])).toBe(true);
		expect(isDark([0, 255, 0])).toBe(false);
		expect(isDark([0, 0, 255])).toBe(true);
		expect(isDark([255, 0, 255])).toBe(true);
		expect(isDark([0, 255, 255])).toBe(false);
		expect(isDark([255, 255, 0])).toBe(false);
	});
});
