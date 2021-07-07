<template>
  <div
    class="the-theme-switch fixed flex inset-x-0 bottom-0 pointer-events-none"
  >
    <button
      class="
        m-2
        rounded-full
        w-12
        h-12
        mx-auto
        bg-green-600
        hover:bg-green-700
        ring-2
        ring-green-700
        text-white
        shadow-lg
        transition
        transform
        duration-500
        hover:scale-110
        pointer-events-auto
        bg-opacity-90
      "
      @click="toggleTheme"
    >
      <fa-icon :icon="icon" />
    </button>
  </div>
</template>

<script lang="ts">
import { state } from '@/state';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const icon = computed(() => (state.theme === 'light' ? 'sun' : 'moon'));
    const toggleTheme = () => {
      let newTheme: Theme = 'light';

      if (state.theme === 'light') {
        newTheme = 'dark';
      }

      localStorage.setItem('theme', newTheme);
      state.theme = newTheme;
    };

    return {
      icon,
      toggleTheme,
    };
  },
});
</script>
