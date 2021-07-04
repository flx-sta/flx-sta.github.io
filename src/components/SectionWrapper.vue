<template>
  <div class="section-wrapper items-center px-5 pb-10 pt-5">
    <h2
      ref="h2"
      class="
        border-animation-left-right-left
        font-semibold
        text-gray-700 text-5xl
        my-5
        py-5
        text-center
      "
    >
      {{ title }}
    </h2>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { useIntersectionObserver } from '@/compositions';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {
      ...props,
      ...useIntersectionObserver(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add('in-view');
        }
      }),
    };
  },
  async mounted() {
    setTimeout(() => {
      this.IntersectionObserver.observe(this.$refs.h2 as Element);
    }, 500);
  },
});
</script>
