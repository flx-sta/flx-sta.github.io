<template>
  <SectionWrapper title="Skills">
    <canvas ref="canvas" id="myChart" width="400" class="h-5"></canvas>
  </SectionWrapper>
</template>

<script lang="ts">
import skills from '@/assets/skills.json';
import { Chart, ChartItem, registerables } from 'chart.js';
import { defineComponent } from 'vue';
import SectionWrapper from './SectionWrapper.vue';

Chart.register(...registerables);

export default defineComponent({
  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    var ctx = canvas.getContext('2d') as ChartItem;
    const skillsData = Object.values(skills);
    const skillsLabels = Object.keys(skills);
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: skillsLabels,
        datasets: [
          {
            indexAxis: 'y',
            label: 'My First Dataset',
            data: skillsData,
            backgroundColor: ['#047857', '#374151'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        indexAxis: 'y',
        scales: {
          xAxis: {
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      },
    });
  },
  components: { SectionWrapper },
});
</script>
