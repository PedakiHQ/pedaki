import { mergeConfig } from "vitest/config";
// @ts-ignore
import configShared from "../../vitest.config.js";

export default mergeConfig(configShared, {
	test: {
		name: "common",
	},
});
