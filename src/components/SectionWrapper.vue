<template>
  <section class="content-section">
    <header class="section-heading">
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
      <p v-if="description" class="section-description">{{ description }}</p>
    </header>
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: { type: String, required: true },
    eyebrow: String,
    description: String,
  },
});
</script>

<style scoped>
.content-section {
  border-top: 1px solid var(--line);
  padding-block: clamp(2.75rem, 6vw, 4.75rem);
}

.section-heading {
  margin-bottom: clamp(1.6rem, 3vw, 2.5rem);
}

h2 {
  margin-block: 0.2rem;
  font-size: clamp(1.9rem, 5vw, 3.15rem);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 1.12;
}

.section-description {
  max-width: 60ch;
  margin-top: 0.7rem;
  color: var(--muted);
  line-height: 1.55;
}
</style>
