export type CacheType = 'memory';

export interface CacheOptions {
  ignoreCache?: boolean;
  ttl: number | undefined;
  keepStale?: boolean;
  // Default: memory
  type?: CacheType;
}

export interface MemoryCacheOptions extends Omit<CacheOptions, 'type' | 'ignoreCache'> {
  type?: 'memory';
}

export interface CachedData<T> {
  data: T;
  createdAt: number;
}
