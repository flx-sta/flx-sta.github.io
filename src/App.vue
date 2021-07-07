<template>
  <div class="app-theme-inidicator-wrapper" :class="theme">
    <div class="app-content-wrapper dark:bg-gray-700">
      <TheNavigation />
      <main>
        <div class="w-full mx-auto mt-12">
          <AboutMeSection id="about-me" />
          <SkillsSection id="skills" class="mt-12" />
          <ProjectsSection id="projects" class="mt-12" />
        </div>
      </main>
      <TheThemeSwitch />
      <TheFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import TheNavigation from './components/TheNavigation.vue';
import AboutMeSection from './components/AboutMeSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import TheFooter from './components/TheFooter.vue';
import { state } from './state';
import TheThemeSwitch from './components/TheThemeSwitch.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheNavigation,
    AboutMeSection,
    SkillsSection,
    ProjectsSection,
    TheFooter,
    TheThemeSwitch,
  },
  setup() {
    const theme = computed(() => state.theme);
    return {
      theme,
    };
  },
});
</script>

<style>
@import url('./assets/tailwind.css');

html {
  scroll-behavior: smooth;
}
</style>
