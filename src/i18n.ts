import locales from '@/assets/locales.json';
import { watch } from 'vue';
import { createI18n } from 'vue-i18n';

let savedLocale: string | null = null;

try {
  savedLocale = localStorage.getItem('locale');
} catch {
  // Fall back to English when browser storage is disabled.
}

const locale = savedLocale && locales.includes(savedLocale) ? savedLocale : 'en';
const i18n = createI18n({ locale, legacy: false });

document.documentElement.lang = locale;

watch(i18n.global.locale, (locale) => {
  document.documentElement.lang = locale;
  try {
    localStorage.setItem('locale', locale);
  } catch {
    // Language switching still works when browser storage is disabled.
  }
});

export default i18n;
