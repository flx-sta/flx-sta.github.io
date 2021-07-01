<template>
  <span
    class="
      text-xs
      font-semibold
      inline-block
      py-1
      px-2
      uppercase
      rounded
      text-gray-700
      bg-green-700
      uppercase
      last:mr-0
      mr-1
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
