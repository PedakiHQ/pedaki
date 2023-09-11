import type { Options } from 'tsup';
import { defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ['src/**/*.(tsx|ts|cjs)', '!src/**/*.(config|test).(tsx|ts|cjs)'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  minify: true,
  minifyWhitespace: true,
  keepNames: true,
  clean: true,
  bundle: false,
  external: ['react'],
  inject: ['./scripts/react-import.js'],
  ...options,
}));
