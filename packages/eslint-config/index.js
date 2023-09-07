module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'next',
    'prettier',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  ignorePatterns: ['*.tsbuildinfo', 'node_modules', 'dist', 'coverage'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  },
  reportUnusedDisableDirectives: true,
};
