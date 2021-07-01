<template>
  <TheNavigation />
  <main>
    <div class="w-full mx-auto">
      <AboutMeSection id="about-me" />

      <SkillsSection id="skills" class="mt-36"/>

      <!-- div id="skills" class="px-4 py-6 sm:px-0">
      </div -->

      <!-- Replace with your content -->
      <div id="projects" class="px-4 py-6 sm:px-0">
        <div
          class="
            border-4 border-dashed border-gray-200
            rounded-lg
            h-96
            flex
            justify-center
            items-center
          "
        >
          Projects
        </div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavigation from './components/TheNavigation.vue';
import AboutMeSection from './components/AboutMeSection.vue';
import SkillsSection from './components/SkillsSection.vue';

export default defineComponent({
  name: 'App',
  components: { TheNavigation, AboutMeSection, SkillsSection },
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
