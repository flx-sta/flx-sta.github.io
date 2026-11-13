import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import vueI18n from '@intlify/unplugin-vue-i18n/vite';

export default defineConfig({
  site: 'https://flx-sta.github.io',
  integrations: [vue({ appEntrypoint: '/src/vue-app.ts' })],
  vite: {
    plugins: [vueI18n({ ssr: true })],
  },
});
