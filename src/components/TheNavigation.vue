<template>
  <header class="site-header">
    <div class="page-width header-inner">
      <a class="brand" href="#about-me">
        <img src="/favicon.svg" alt="" width="28" height="28" />
        <span>Felix Staud</span>
      </a>
      <nav :aria-label="t('navigation')" class="nav-links">
        <a href="#experience">{{ t('experience') }}</a>
        <a href="#projects">{{ t('work') }}</a>
        <a href="#skills">{{ t('toolkit') }}</a>
      </nav>
      <LanguageLinks class="header-language" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageLinks from './LanguageLinks.vue';

export default defineComponent({
  components: { LanguageLinks },
  setup() {
    const { t } = useI18n({ inheritLocale: true });
    return { t };
  },
});
</script>

<style scoped>
.site-header {
  position: sticky;
  z-index: 5;
  top: 0;
  border-bottom: 1px solid var(--line);
  background: var(--surface);
}

.header-inner {
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem 1.25rem;
  padding-block: 0.45rem;
}

.brand,
.nav-links {
  display: flex;
  align-items: center;
}

.brand {
  gap: 0.6rem;
  font-weight: 700;
  white-space: nowrap;
}

.nav-links {
  gap: clamp(0.75rem, 3vw, 1.8rem);
  margin-left: auto;
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 600;
}

.nav-links a:hover,
.brand:hover {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 0.25em;
}

.header-language {
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .header-inner {
    flex-wrap: wrap;
  }

  .nav-links {
    order: 1;
    width: 100%;
    margin: 0;
    padding-block: 0.2rem 0.35rem;
    font-size: 0.84rem;
  }
}
</style>

<i18n lang="yaml">
en:
  navigation: Main navigation
  experience: Experience
  work: Work
  toolkit: Toolkit
de:
  navigation: Hauptnavigation
  experience: Berufserfahrung
  work: Projekte
  toolkit: Technologien
</i18n>
