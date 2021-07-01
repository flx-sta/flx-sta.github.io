<template>
  <SectionWrapper title="Skills">
    <div class="flex justify-center items-center w-full">
      <canvas ref="canvas" id="myChart" width="200" class="max-h-56"></canvas>
    </div>
  </SectionWrapper>
</template>

<script lang="ts">
import * as skills from '@/assets/skills';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js';
import { defineComponent } from 'vue';
import SectionWrapper from './SectionWrapper.vue';

Chart.register(...registerables);

const getChartConfig = {
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
};

export default defineComponent({
  components: { SectionWrapper },
  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    var ctx = canvas.getContext('2d') as ChartItem;

    new Chart(ctx, this.getChartConfig(skills.languages));
  },
  methods: {
    getChartConfig(jsonData: object): ChartConfiguration {
      const labels = Object.keys(jsonData);
      const data = Object.values(jsonData);

      return {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              indexAxis: 'y',
              label: 'My First Dataset',
              data,
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
      };
    },
  },
});
</script>
