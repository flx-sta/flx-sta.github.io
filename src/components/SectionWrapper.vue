<template>
  <div class="section-wrapper items-center px-5 pb-10 pt-5">
    <h2
      class="
        font-semibold
        text-gray-700 text-5xl
        my-5
        py-5
        text-center
        border-b-4 border-t-4 border-gray-300
      "
    >
      {{ title }}
    </h2>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
