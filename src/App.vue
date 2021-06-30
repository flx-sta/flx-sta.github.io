<template>
  <TheNavigation />
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <ProfileCard id="about-me" />

      <!-- Replace with your content -->
      <div id="skills" class="px-4 py-6 sm:px-0">
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
          SKILLS
        </div>
      </div>
      <!-- /End replace -->

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
import ProfileCard from './components/ProfileCard.vue';

export default defineComponent({
  name: 'App',
  components: { TheNavigation, ProfileCard },
});
</script>

<style>
@import url('./assets/tailwind.css');

html {
  scroll-behavior: smooth;
}
</style>
