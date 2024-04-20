import { describe, expect, test } from "vitest";
import { clamp, parseIntOr } from "./math.ts";

describe("clamp", () => {
	test("clamp a value between min and max", () => {
		expect(clamp(0, 1, 10)).toBe(1);
		expect(clamp(5, 1, 10)).toBe(5);
		expect(clamp(15, 1, 10)).toBe(10);
	});
});

describe("parseIntOr", () => {
	test("parse a string to int or return default value", () => {
		expect(parseIntOr("1", 2)).toBe(1);
		expect(parseIntOr("a", 2)).toBe(2);
		expect(parseIntOr(null, 2)).toBe(2);
		expect(parseIntOr(undefined, 2)).toBe(2);
		expect(parseIntOr(Number.NaN, 2)).toBe(2);
		expect(parseIntOr(Number.MIN_VALUE, 2)).toBe(Number.MIN_VALUE);
	});
});
