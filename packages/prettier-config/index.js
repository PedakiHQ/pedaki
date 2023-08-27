/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig*/
/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
  plugins: [
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
    require.resolve("prettier-plugin-tailwindcss")
  ],
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 100,
  tailwindConfig: './tailwind.config.cjs',
  arrowParens: 'avoid',
  tabWidth: 2,
};

module.exports = config;
