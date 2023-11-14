import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        coverage: {
            include: ['src/**/*.{ts,tsx}'],
            exclude: ['**/index.ts'],
            all: true,
            provider: 'v8',
            reporter: ['text', 'json-summary', 'json'],
        },
    },
})