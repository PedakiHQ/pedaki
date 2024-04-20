import type { CachedData } from "./types.ts";

export const formatData = <T>(data: T) => {
	return {
		data,
		createdAt: Date.now(),
	} as CachedData<T>;
};
