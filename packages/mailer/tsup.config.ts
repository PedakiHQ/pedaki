import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
    treeshake: true,
    splitting: true,
    entry: ["src/**/*.(tsx|ts)"],
    format: ["esm"],
    dts: true,
    minify: true,
    clean: true,
    bundle: false,
    external: ["react"],
    ...options,
}));