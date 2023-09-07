import { cache as memoryCache, revalidate as memoryRevalidate } from './memory-cache';
import type { CacheOptions } from './types';

export const cache = async <T>(
  fn: () => Promise<T>,
  key: string,
  options?: CacheOptions,
): Promise<T> => {
  if (options?.ignoreCache) {
    return fn();
  }

  if (options?.type === 'memory') {
    return memoryCache(fn, key, options);
  }

  throw new Error('Invalid cache type');
};

export const revalidate = (key: string, options?: Pick<CacheOptions, 'type'>) => {
  if (options?.type === 'memory') {
    return memoryRevalidate(key);
  }

  throw new Error('Invalid cache type');
};
