<template>
  <SectionWrapper :title="t('title')">
    <ul class="toolkit" role="list">
      <li v-for="group in groups" :key="group.key">
        <h3>{{ t(group.key) }}</h3>
        <p>{{ group.skills.join(', ') }}</p>
      </li>
    </ul>
  </SectionWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import SectionWrapper from './SectionWrapper.vue';

const groups = [
  {
    key: 'frontend',
    skills: ['TypeScript', 'React', 'Lit', 'Vue.js', 'Adobe Experience Manager'],
  },
  {
    key: 'backend',
    skills: ['Java', 'Spring Boot', 'Node.js', 'REST', 'OAuth 2.0', 'PostgreSQL', 'MongoDB'],
  },
  {
    key: 'delivery',
    skills: ['AWS', 'Azure', 'Docker', 'Terraform', 'GitHub Actions'],
  },
  {
    key: 'quality',
    skills: ['JUnit', 'Jest', 'Scrum'],
  },
];

export default defineComponent({
  components: { SectionWrapper },
  setup() {
    const { t } = useI18n({ inheritLocale: true });
    return { groups, t };
  },
});
</script>

<i18n lang="yaml">
en:
  title: Toolkit
  frontend: Frontend & CMS
  backend: Backend & data
  delivery: Cloud & delivery
  quality: Testing & collaboration
de:
  title: Technologien
  frontend: Frontend & CMS
  backend: Backend & Daten
  delivery: Cloud & Bereitstellung
  quality: Testen & Zusammenarbeit
</i18n>

<style scoped>
.toolkit {
  display: grid;
  gap: 1.25rem 1.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.toolkit h3 {
  margin-bottom: 0.375rem;
  color: var(--text);
  font-size: 0.875rem;
  font-weight: 600;
}

.toolkit p {
  color: var(--muted);
  font-size: 0.875rem;
  line-height: 1.6;
}

@media (min-width: 420px) {
  .toolkit {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 900px) {
  .toolkit {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
