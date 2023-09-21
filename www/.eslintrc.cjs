module.exports = {
    extends: ['@pedaki/eslint-config'],
    parserOptions: {
        project: true,
    },
    ignorePatterns: ['**/dist/**/*', '**/node_modules/**/*', '**/scripts/**/*', ".next"],
};