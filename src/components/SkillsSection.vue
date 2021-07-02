<template>
  <SectionWrapper title="Skills">
    <div class="skills-charts-wrapper grid lg:grid-cols-2 grid-cols-1 gap-6">
      <SkillsChart
      v-for="skill in skills"
      :key="`skill-chart-${skill.title}`"
      :title="skill.title"
      :collection="skill.data"
    />
    </div>
  </SectionWrapper>
</template>

<script lang="ts">
import skills from '@/assets/skills';
import { BarController, BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import { defineComponent } from 'vue';
import SectionWrapper from './SectionWrapper.vue';
import SkillsChart from './SkillsChart.vue';

Chart.register(BarElement, CategoryScale, BarController, LinearScale);

export default defineComponent({
  components: { SectionWrapper, SkillsChart },
  setup() {
    return {
      skills,
    };
  },
});
</script>
