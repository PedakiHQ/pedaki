import cpy from 'cpy';
import { execaCommand } from 'execa';
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
    await cpy(['package.json', 'src/**/*.{css,scss,svg,config.ts,pug}', 'README.md'], 'dist');
    await execaCommand('pnpm exec tsconfig-replace-paths', {
      stdout: process.stdout,
      stderr: process.stderr,
    });

    await execaCommand('node ../../scripts/fix-ts-paths.js', {
      stdout: process.stdout,
      stderr: process.stderr,
    });
  },
  ...options,
}));
