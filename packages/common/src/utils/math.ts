export const clamp = (value: number, min: number, max: number) => {
	return Math.max(Math.min(value, max), min);
};

export const parseIntOr = (value: unknown, defaultValue: number) => {
	if (typeof value === "number" && !Number.isNaN(value)) return value;
	if (value === null || typeof value !== "string") return defaultValue;
	const parsed = Number.parseInt(value, 10);
	if (Number.isNaN(parsed)) {
		return defaultValue;
	}
	return parsed;
};
