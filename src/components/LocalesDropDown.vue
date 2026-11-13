<template>
  <div class="language-select">
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
    <select v-model="locale" :aria-label="t('label')">
      <option v-for="item in locales" :key="item" :value="item" :lang="item">
        {{ item.toUpperCase() }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import i18n from '@/i18n';
import locales from '@/assets/locales.json';

export default defineComponent({
  setup() {
    const { t } = useI18n({ inheritLocale: true });
    return { locale: i18n.global.locale, locales, t };
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
.language-select {
  position: relative;
  color: var(--muted);
  font-size: 0.875rem;
}

.language-select svg {
  position: absolute;
  top: 50%;
  left: 0.55rem;
  transform: translateY(-50%);
  pointer-events: none;
}

.language-select select {
  min-height: 2.4rem;
  padding: 0.25rem 0.35rem 0.25rem 1.75rem;
  border: 1px solid var(--line);
  border-radius: 0.45rem;
  background: var(--surface);
  color: var(--accent);
}

.language-select select:hover {
  background: var(--accent-soft);
}
</style>
