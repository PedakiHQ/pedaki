import cpy from 'cpy';
import execa from 'execa';
import { defineConfig } from 'tsup';
import type { Options } from 'tsup';

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ['src/**/*.(tsx|ts)'],
  format: ['esm'],
  dts: true,
  minify: true,
  sourcemap: true,
  minifyWhitespace: true,
  keepNames: true,
  clean: true,
  bundle: false,
  external: ['react'],
  onSuccess: async () => {
    await cpy(['package.json', 'src/**/*.{css,scss,svg,config.ts}', 'README.md'], 'dist');
    await execa.command('pnpm exec tsconfig-replace-paths', {
      stdout: process.stdout,
      stderr: process.stderr,
    });
  },
  ...options,
}));
