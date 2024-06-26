import {
	cache as memoryCache,
	getCache as memoryGetCache,
	revalidate as memoryRevalidate,
	revalidateAll as memoryRevalidateAll,
} from "./memory-cache.ts";
import type { CachedData, CacheOptions } from "./types.ts";

export const cache = async <T>(
	fn: (() => Promise<T>) | T,
	key: string,
	options?: CacheOptions,
): Promise<T> => {
	if (!options?.type || options.type === "memory") {
		return memoryCache(fn, key, options);
	}

	throw new Error("Invalid cache type");
};

export const revalidate = (
	key: string,
	options?: Pick<CacheOptions, "type">,
) => {
	if (!options?.type || options.type === "memory") {
		return memoryRevalidate(key);
	}

	throw new Error("Invalid cache type");
};

export const revalidateAll = (options?: Pick<CacheOptions, "type">) => {
	if (!options?.type || options.type === "memory") {
		return memoryRevalidateAll();
	}

	throw new Error("Invalid cache type");
};

export const getCache = async <T>(
	key: string,
	options?: Pick<CacheOptions, "type">,
): Promise<CachedData<T> | null> => {
	if (!options?.type || options.type === "memory") {
		return memoryGetCache(key);
	}

	throw new Error("Invalid cache type");
};

export const isStale = (data: CachedData<unknown>, ttl: number): boolean => {
	return Date.now() - data.createdAt > ttl;
};
