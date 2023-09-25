import cpy from 'cpy';
import execa from 'execa';
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
  onSuccess: async () => {
    await cpy(['package.json', 'src/**/*.{css,scss,svg,config.ts}', 'README.md'], 'dist');
    await execa.command('pnpm exec tsconfig-replace-paths', {
      stdout: process.stdout,
      stderr: process.stderr,
    });
    await execa.command('node scripts/add-directive-dist.cjs', {
      stdout: process.stdout,
      stderr: process.stderr,
    });
  },
  ...options,
}));
