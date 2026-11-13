import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://flx-sta.github.io',
  integrations: [react()],
});
