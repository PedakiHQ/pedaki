import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        watch: false,
        coverage: {
            include: ['src/**/*.{ts,tsx}'],
            exclude: ['**/index.ts'],
            all: true,
            provider: 'v8',
            reporter: ['json-summary', 'json'],

            lines: 60,
            branches: 60,
            functions: 60,
            statements: 60
        },
    },
})