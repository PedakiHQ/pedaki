import type { CachedData } from './types';

export const formatData = <T>(data: T) => {
  return {
    data,
    createdAt: Date.now(),
  } as CachedData<T>;
};
