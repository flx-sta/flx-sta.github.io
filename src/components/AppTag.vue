<template>
  <span
    class="
      text-xs
      font-semibold
      inline-block
      py-1
      px-2
      rounded
      border
      text-gray-800
      border-gray-600
      bg-gray-100
      dark:text-white dark:bg-gray-700 dark:border-gray-500
      uppercase
      last:mr-0
      mr-1
      mt-1
      transition
      duration-500
    "
  >
    <fa-icon v-if="icon" :icon="icon" /> {{ title }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: Object as () => string | string[],
      required: false,
    },
  },
});
</script>
