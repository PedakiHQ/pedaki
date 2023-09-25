import cacheData from 'memory-cache';
import { formatData } from './shared.ts';
import type { CachedData, MemoryCacheOptions } from './types.ts';

export const cache = async <T>(
  fn: (() => Promise<T>) | T,
  key: string,
  options?: MemoryCacheOptions,
): Promise<T> => {
  const value = getCache<T>(key);
  const hit = value !== null && value !== undefined;

  if (hit) {
    // Check if data is still valid
    if (!options?.ttl || Date.now() - value.createdAt <= options.ttl) {
      return value.data;
    }
  }

  try {
    const newValue = fn instanceof Function ? await fn() : fn;

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

export const revalidateAll = () => {
  cacheData.clear();
};

export const getCache = <T>(key: string): CachedData<T> | null => {
  return cacheData.get(key) as CachedData<T> | null;
};
