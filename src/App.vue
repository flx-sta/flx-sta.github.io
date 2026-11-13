<template>
  <div class="portfolio">
    <a class="skip-link" href="#main-content">{{ t('skip') }}</a>
    <TheNavigation />
    <main id="main-content" class="page-width" tabindex="-1">
      <AboutMeSection id="about-me" :portrait-src="portraitSrc" />
      <ExperienceSection id="experience" />
      <ProjectsSection id="projects" />
      <SkillsSection id="skills" />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import type { Locale } from './i18n';
import AboutMeSection from './components/AboutMeSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import TheFooter from './components/TheFooter.vue';
import TheNavigation from './components/TheNavigation.vue';

export default defineComponent({
  props: {
    locale: { type: String as PropType<Locale>, required: true },
    portraitSrc: { type: String, required: true },
  },
  components: {
    AboutMeSection,
    ExperienceSection,
    ProjectsSection,
    SkillsSection,
    TheFooter,
    TheNavigation,
  },
  setup(props) {
    const { locale } = useI18n({ useScope: 'global' });
    locale.value = props.locale;
    const { t } = useI18n({ inheritLocale: true });
    return { t };
  },
});
</script>

<style>
@import url('./assets/tailwind.css');

:root {
  --bg: #f5f6f2;
  --surface: #fff;
  --text: #142620;
  --muted: #4e6158;
  --line: #ccd7cf;
  --accent: #13634c;
  --accent-soft: #e5efe8;
  --on-accent: #fff;
  color: var(--text);
  background: var(--bg);
  color-scheme: light;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #13231d;
    --surface: #1a2e26;
    --text: #f0f7f2;
    --muted: #b1c6ba;
    --line: #385349;
    --accent: #9ce2bd;
    --accent-soft: #254137;
    --on-accent: #10271c;
    color-scheme: dark;
  }
}

.portfolio {
  min-height: 100vh;
}

.page-width {
  width: min(100% - 2.5rem, 68rem);
  margin-inline: auto;
}

.portfolio section[id] {
  scroll-margin-top: 7.5rem;
}

.portfolio :focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

.skip-link {
  position: fixed;
  z-index: 20;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.6rem 1rem;
  transform: translateY(-200%);
  background: var(--surface);
  color: var(--text);
}

.skip-link:focus {
  transform: none;
}

.eyebrow {
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
</style>

<i18n lang="yaml">
en:
  skip: Skip to content
de:
  skip: Zum Inhalt springen
</i18n>
