<template>
  <SectionWrapper title="Skills">
    <div class="skills-charts-wrapper grid lg:grid-cols-2 grid-cols-1 gap-6">
      <SkillsChart
        v-for="(skill, key) in skills"
        :key="`skill-chart-${skill.title}`"
        :title="skill.title"
        :collection="skill.data"
      />
    </div>
  </SectionWrapper>
</template>

<script lang="ts">
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
} from 'chart.js';
import { defineComponent, computed } from 'vue';
import SectionWrapper from './SectionWrapper.vue';
import SkillsChart from './SkillsChart.vue';
import { useI18n } from 'vue-i18n';

Chart.register(BarElement, CategoryScale, BarController, LinearScale);

export default defineComponent({
  components: { SectionWrapper, SkillsChart },
  setup() {
    const { t } = useI18n({ inheritLocale: true });

    const skills = computed(() => [
      { title: t('Programming languages'), data: programmingLanguages },
      { title: t('Tools'), data: tools },
      { title: t('Communication'), data: communication },
      { title: t('Databases'), data: databases },
      { title: t('Testing'), data: testing },
      { title: t('CI / CD'), data: cicd },
      {
        title: t('Languages'),
        data: languages,
      },
    ]);

    return {
      skills,
      t,
    };
  },
});

const programmingLanguages = {
  javascript: 100,
  typescript: 98,
  php: 60,
  java: 60,
  python: 55,
};

const tools = {
  'Node.js': 100,
  'Vue.js': 100,
  'codecept.js': 95,
  react: 75,
  jest: 75,
  'socket.io': 60,
  angular: 40,
  svelte: 30,
};

const communication = {
  REST: 100,
  WebSocket: 80,
  'socket.io': 60,
};

const databases = {
  MySQL: 98,
  PostgreSQL: 97,
  NoSQL: 80,
  firebase: 60,
  DynamoDB: 55,
};

const testing = {
  'end to end ': 100,
  unit: 90,
  integration: 80,
};

const cicd = {
  'gitlab-ci': 70,
  'github-ci': 70,
  jenkins: 50,
  travis: 50,
};

const languages = {
  Deutsch: 100,
  English: 99,
};
</script>

<i18n lang="yaml">
en:
  Programming languages: Programming languages
  Tools: Tools
  Communication: Communication
  Databases: Databases
  Testing: Testing
  CI / CD: CI / CD
  Languages: Languages
de:
  Programming languages: Programmiersprachen
  Tools: Tools
  Communication: Kommunikation
  Databases: Datenbanken
  Testing: Testing
  CI / CD: CI / CD
  Languages: Sprachen
</i18n>
