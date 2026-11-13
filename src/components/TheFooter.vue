<template>
  <footer class="site-footer">
    <div class="page-width footer-inner">
      <span>&copy; {{ year }} Felix Staud</span>
      <div class="footer-links">
        <a :href="contactHref">{{ t('contact') }}</a>
        <a href="https://github.com/flx-sta/flx-sta.github.io">{{ t('source') }}</a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { contactHref } from '@/contact';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n({ inheritLocale: true });
    return { t, contactHref, year: new Date().getFullYear() };
  },
});
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--line);
  background: var(--surface);
  color: var(--muted);
  font-size: 0.9rem;
}

.footer-inner,
.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1.3rem;
}

.footer-inner {
  justify-content: space-between;
  padding-block: 1.25rem;
}

a {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}
</style>

<i18n lang="yaml">
en:
  contact: Contact
  source: Site source
de:
  contact: Kontakt
  source: Quellcode der Website
</i18n>
