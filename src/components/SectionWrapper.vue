<template>
  <div class="section-wrapper items-center px-5 pb-10 pt-5">
    <h2
      ref="h2"
      class="
        border-animation-left-right-left
        font-semibold
        text-gray-700 text-4xl lg:text-5xl
        dark:text-gray-300
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
import { useI18n } from 'vue-i18n';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { locale } = useI18n({ inheritLocale: true });

    return {
      locale,
      ...useIntersectionObserver(({ target, isIntersecting }) => {
        if (isIntersecting) {
          setTimeout(() => {
            target.classList.add('in-view');
          }, 300);
        }
      }),
    };
  },
  watch: {
    locale() {
      this.IntersectionObserver.unobserve(this.$refs.h2 as Element);
      (this.$refs.h2 as Element).classList.remove('in-view');
      this.IntersectionObserver.observe(this.$refs.h2 as Element);

    },
  },
  async mounted() {
    this.IntersectionObserver.observe(this.$refs.h2 as Element);
  },
});
</script>
