import type { App } from 'vue';
import { createI18n } from 'vue-i18n';

export default function setupVueApp(app: App) {
  app.use(createI18n({ legacy: false, locale: 'en', fallbackLocale: 'en' }));
}
