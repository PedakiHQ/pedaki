import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        env: {
            "FORCE_COLOR": "1",
        },
        coverage: {
            include: ['src/**/*.{ts,tsx}'],
            exclude: ['**/index.ts'],
            all: true,
            provider: 'v8',
        },
    },
})