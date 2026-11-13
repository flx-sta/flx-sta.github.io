export const localeLinks = [
  { code: 'en', href: '/', label: 'EN', name: 'English' },
  { code: 'de', href: '/de/', label: 'DE', name: 'Deutsch' },
] as const;

export type Locale = (typeof localeLinks)[number]['code'];
