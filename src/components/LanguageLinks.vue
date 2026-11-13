<template>
  <nav class="language-links" :aria-label="t('label')">
    <!-- Tabler Icons: world. See public/tabler-icons-license.txt. -->
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h16.8" />
      <path d="M11.5 3a17 17 0 0 0 0 18" />
      <path d="M12.5 3a17 17 0 0 1 0 18" />
    </svg>
    <a
      v-for="language in localeLinks"
      :key="language.code"
      :href="language.href"
      :lang="language.code"
      :hreflang="language.code"
      :aria-label="language.name"
      :aria-current="language.code === locale ? 'page' : undefined"
    >
      {{ language.label }}
    </a>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { localeLinks } from '@/i18n';

export default defineComponent({
  setup() {
    const { t, locale } = useI18n({ inheritLocale: true });
    return { t, locale, localeLinks };
  },
});
</script>

<i18n lang="yaml">
en:
  label: Language
de:
  label: Sprache
</i18n>

<style scoped>
.language-links {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  min-height: 2.4rem;
  padding: 0.2rem 0.35rem 0.2rem 0.55rem;
  border: 1px solid var(--line);
  border-radius: 0.45rem;
  background: var(--surface);
  color: var(--muted);
  font-size: 0.8rem;
}

svg {
  margin-right: 0.15rem;
}

a {
  padding: 0.25rem 0.35rem;
  border-radius: 0.25rem;
  color: var(--accent);
}

a:hover,
a[aria-current='page'] {
  background: var(--accent-soft);
}

a[aria-current='page'] {
  font-weight: 700;
}
</style>
