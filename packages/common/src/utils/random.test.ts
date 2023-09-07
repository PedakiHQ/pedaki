import { describe, expect, test } from 'vitest';
import { generateToken, randomId } from './random';

test('generate a randomId of length 9', () => {
  const id = randomId();
  expect(id.length).toBe(9);
  expect(id).toMatch(/v-[a-z0-9]{7}/);
});

describe('generate a token with a fixed length', () => {
  const length = Math.floor(Math.random() * 100) + 1;

  test(`generate a token of length ${length}`, () => {
    const token = generateToken(length);
    expect(token.length).toBe(length);
  });

  test(`generate a token of length ${length} with prefix`, () => {
    const prefix = 'prefix-';
    const token = generateToken(length, prefix);
    expect(token.length).toBe(Math.max(length, prefix.length));
    expect(token).toMatch(new RegExp(`^${prefix}.{${Math.max(0, length - prefix.length)}}`));
  });
});
