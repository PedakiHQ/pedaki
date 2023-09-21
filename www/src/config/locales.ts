export const locales = [
  {
    name: 'English',
    code: 'en',
  },
  {
    name: 'Français',
    code: 'fr',
  },
] as const;

export type LocaleCode = (typeof locales)[number]['code'];
