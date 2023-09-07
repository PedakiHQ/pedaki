import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { cache, getCache, isStale, revalidate, revalidateAll } from './cache';

describe('cache - memory', () => {
  const value = 'test';
  const asyncFn = () => Promise.resolve(value);
  const syncFn = () => value;
  const key = 'key';
  const mock = vi.fn().mockImplementation(asyncFn);

  beforeEach(() => {
    revalidateAll();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('cache a value (async)', async () => {
    const result = await cache(asyncFn, key);
    expect(result).toBe(value);
  });

  test('cache a value (sync)', async () => {
    const result = await cache(syncFn, key);
    expect(result).toBe(value);
  });

  describe('with ttl', () => {
    test('without keepStale', async () => {
      await cache(value, key, { ttl: 1000, keepStale: false });

      let cached = await getCache(key);
      expect(isStale(cached!, 1000)).toBe(false);

      vi.useFakeTimers();
      vi.advanceTimersByTime(10000);

      cached = await getCache(key);
      expect(cached).toBeNull();
    });

    test('with keepStale', async () => {
      await cache(value, key, { ttl: 1000, keepStale: true });

      let cached = await getCache(key);
      expect(isStale(cached!, 1000)).toBe(false);

      vi.useFakeTimers();
      vi.advanceTimersByTime(10000);

      cached = await getCache(key);
      expect(cached).not.toBeNull();

      expect(isStale(cached!, 1000)).toBe(true);
    });
  });

  describe('ignoreCache', () => {
    test('without ignoreCache', async () => {
      await cache(mock, key, { ignoreCache: false });
      await cache(mock, key, { ignoreCache: false });

      expect(mock).toHaveBeenCalledTimes(1);
    });

    test('with ignoreCache', async () => {
      await cache(mock, key, { ignoreCache: true });
      await cache(mock, key, { ignoreCache: true });

      expect(mock).toHaveBeenCalledTimes(2);
    });
  });

  describe('revalidate', () => {
    test('revalidate a key', async () => {
      await cache(mock, key);
      await cache(mock, key);

      expect(mock).toHaveBeenCalledTimes(1);

      const before = await getCache(key);
      expect(before).not.toBeNull();

      revalidate(key);

      const after = await getCache(key);
      expect(after).toBeNull();

      await cache(mock, key);

      expect(mock).toHaveBeenCalledTimes(2);
    });

    test('revalidate all keys', async () => {
      await cache(mock, key);
      await cache(mock, key);

      expect(mock).toHaveBeenCalledTimes(1);

      const before = await getCache(key);
      expect(before).not.toBeNull();

      revalidateAll();

      const after = await getCache(key);
      expect(after).toBeNull();

      await cache(mock, key);

      expect(mock).toHaveBeenCalledTimes(2);
    });
  });
});
