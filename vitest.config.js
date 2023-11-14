import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        watch: false,
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json-summary', 'json'],
        },
    },
})