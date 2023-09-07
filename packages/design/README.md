# @pedaki/design

## Imports

You need to use this tsconfig:

```json file=tsconfig.json
{
  "compilerOptions": {
    "module": "node16",
    "moduleResolution": "node16"
  }
}
```

or more recent.

### Icons

Most of the icons comes from [lucide](https://lucide.dev/).

TODO

### Ui

TODO

### Tailwind

TODO

Add this to your `tailwind.config.js`:

```js file=tailwind.config.js
module.exports = {
  content: ['@pedaki/design/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [require('@pedaki/design/tailwind-config')],
};
```

And import the global styles in your `layout.tsx`:

```tsx file=index.tsx
import '@pedaki/design/styles.css';
```
