import * as crypto from "node:crypto";
import { describe, expect, test } from "vitest";
import {
	decrypt,
	encrypt,
	hash256,
	hashPassword,
	hmac,
	matchPassword,
} from "./hash.ts";

describe("hash256", () => {
	describe("hash 'hello' with sha256", () => {
		const input = "hello";
		const hash = hash256(input);
		test("the output should not be the same as the input", () => {
			expect(hash).not.toBe(input);
		});
		test("with the same input, the hash should be the same", () => {
			expect(hash256(input)).toBe(hash);
		});
		test("the hash should be the same as the one generated by sha256 online", () => {
			expect(hash).toBe(
				"2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824",
			);
		});
	});

	describe("hash an empty string with sha256", () => {
		const input = "";
		const hash = hash256(input);
		test("the output should not be the same as the input", () => {
			expect(hash).not.toBe(input);
		});
		test("with the same input, the hash should be the same", () => {
			expect(hash256(input)).toBe(hash);
		});
		test("the hash should be the same as the one generated by sha256 online", () => {
			expect(hash).toBe(
				"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
			);
		});
	});
});

describe("hmac", () => {
	describe("hash a string with secret", () => {
		const input = "hello";
		const secret = "secret";
		const hash = hmac(input, secret);
		test("the output should not be the same as the input", () => {
			expect(hash).not.toBe(input);
		});
		test("with the same input and secret, the hash should be the same", () => {
			expect(hmac(input, secret)).toBe(hash);
		});
	});
});

describe("hashPassword/matchPassword", () => {
	describe("hash a password with pepper", () => {
		const password = "password";
		const pepper = "pepper";
		const hash = hashPassword(password, pepper);

		test("the output should not be the same as the input", () => {
			expect(hash).not.toBe(password);
		});

		test("with the same password and pepper, the hash should not be the same", () => {
			expect(hashPassword(password, pepper)).not.toBe(hash);
		});

		test("with the same password and pepper, the hash should match", () => {
			expect(matchPassword(password, hash, pepper)).toBe(true);
		});
	});
});

describe("encrypt/decrypt", () => {
	const key = "supersecretkeysupersecretkeysupe";
	const text = crypto.randomBytes(32).toString("utf-8");
	const encrypted = encrypt(text, key);
	describe("encrypt", () => {
		test("the output should not be the same as the input", () => {
			expect(encrypted).not.toBe(text);
		});
		test("with the same input and key, the encrypted data should be different", () => {
			expect(encrypt(text, key)).not.toBe(encrypted);
		});
		test("the encrypted text should be different with a different key", () => {
			expect(encrypt(text, "notthesamekeynotthesamekeynotthe")).not.toBe(
				encrypted,
			);
		});
		test("the encrypted text should be different with a different input", () => {
			expect(encrypt("hello world", key)).not.toBe(encrypted);
		});
	});
	describe("decrypt", () => {
		test("with the same encrypted text and key, the decrypted text should be the same", () => {
			expect(decrypt(encrypted, key)).toBe(text);
		});
		test("with a different key, this should throw an error", () => {
			expect(() =>
				decrypt(encrypted, crypto.randomBytes(32).toString("utf-8")),
			).toThrow();
		});
	});
});
