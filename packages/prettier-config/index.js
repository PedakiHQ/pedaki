const config = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 100,
  arrowParens: "avoid",
  tabWidth: 2,
  tailwindFunctions: ["cn"],
};

module.exports = config;
