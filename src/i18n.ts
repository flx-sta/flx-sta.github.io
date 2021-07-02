import languages from '@/assets/languages.json';
import { createI18n } from 'vue-i18n';

let locale = 'en';
const lsLocale = localStorage.getItem('locale');

if (lsLocale && languages.includes(lsLocale)) {
  locale = lsLocale;
}

const i18n = createI18n({ locale, legacy: false });

export default i18n;
