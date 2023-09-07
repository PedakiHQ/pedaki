import cacheData from 'memory-cache';
import { formatData } from './shared';
import type { CachedData, MemoryCacheOptions } from './types';

export const cache = async <T>(
  fn: () => Promise<T>,
  key: string,
  options?: MemoryCacheOptions,
): Promise<T> => {
  const value = cacheData.get(key) as CachedData<T> | null;
  const hit = value !== null && value !== undefined;

  if (hit) {
    // Check if data is still valid
    if (!options?.ttl || Date.now() - value.createdAt <= options.ttl) {
      return value.data;
    }
  }

  try {
    const newValue = await fn();

    cacheData.put(key, formatData(newValue), options?.keepStale ? undefined : options?.ttl);
    return newValue;
  } catch (e) {
    if (hit && options?.keepStale) {
      return value.data;
    }

    throw e;
  }
};

export const revalidate = (key: string) => {
  cacheData.del(key);
};
