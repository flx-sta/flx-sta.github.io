<template>
  <article class="project-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <ul class="tags" :aria-label="tagsLabel">
      <li v-for="tag in tags" :key="tag">{{ tag }}</li>
    </ul>
    <div class="project-links">
      <a v-for="link in links" :key="link.url" :href="link.url" :aria-label="link.label + ': ' + title">
        {{ link.label }}
      </a>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tagsLabel: { type: String, required: true },
    tags: { type: Array as PropType<string[]>, required: true },
    links: { type: Array as PropType<{ label: string; url: string }[]>, required: true },
  },
});
</script>

<style scoped>
.project-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  padding: clamp(1.15rem, 3vw, 1.65rem);
  border: 1px solid var(--line);
  border-radius: 0.65rem;
  background: var(--surface);
}

h3 {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}

p {
  margin-top: 0.45rem;
  color: var(--muted);
  line-height: 1.6;
}

.tags,
.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.65rem;
}

.tags {
  margin-block: 1rem;
  color: var(--accent);
  font-size: 0.82rem;
  font-weight: 650;
}

.tags li {
  padding: 0.2rem 0.45rem;
  border-radius: 0.3rem;
  background: var(--accent-soft);
}

.project-links {
  gap: 0.5rem 1rem;
  margin-top: auto;
  color: var(--accent);
  font-size: 0.92rem;
  font-weight: 650;
}

a {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}
</style>
