<template>
  <TheNavigation />
  <main>
    <div class="w-full mx-auto mt-12">
      <AboutMeSection id="about-me" />

      <SkillsSection id="skills" class="mt-12" />

      <ProjectsSection id="projects" class="mt-12" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavigation from './components/TheNavigation.vue';
import AboutMeSection from './components/AboutMeSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';

export default defineComponent({
  name: 'App',
  components: { TheNavigation, AboutMeSection, SkillsSection, ProjectsSection },
});
</script>

<style>
@import url('./assets/tailwind.css');

html {
  scroll-behavior: smooth;
}

.section-wrapper::nth-child(even) {
  background-color: 'blue' !important;
}
</style>
