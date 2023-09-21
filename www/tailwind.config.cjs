module.exports = {
    content: [
        'node_modules/@pedaki/design/**/*.{js,ts,jsx,tsx,mdx}',
        '../node_modules/@pedaki/design/**/*.{js,ts,jsx,tsx,mdx}',
        "src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    presets: [require('@pedaki/design/tailwind/tailwind.config')],
};