<template>
  <div
    class="the-theme-switch sticky flex right-0 bottom-0 pointer-events-none"
  >
    <button
      class="
        m-2
        rounded-full
        w-10
        h-10
        lg:w-14 lg:h-14
        ml-auto
        bg-green-700
        hover:bg-green-700
        text-white
        shadow
        transition
        transform
        duration-500
        hover:scale-110
        pointer-events-auto
        outline-none
      "
      @click="toggleTheme"
    >
      <fa-icon :icon="icon" class="lg:text-2xl text-md" />
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
