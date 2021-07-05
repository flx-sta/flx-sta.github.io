import locales from '@/assets/locales.json';
import { createI18n } from 'vue-i18n';

let locale: Locale = 'en';
const lsLocale = localStorage.getItem('locale');

if (lsLocale && locales.includes(lsLocale)) {
  locale = lsLocale as Locale;
}

const i18n = createI18n({ locale, legacy: false });

export default i18n;
