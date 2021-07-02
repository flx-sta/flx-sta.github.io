<template>
  <div
    class="
      skills-chart
      flex flex-col
      items-center
      w-full
      border-2
      p-5
      shadow-lg
      transform
      duration-500
      hover:scale-105
    "
  >
    <h2
      class="
        capitalize
        text-2xl text-gray-700
        mb-2
        pb-2
        border-b-2 border-gray-300
        w-10/12
        text-center
      "
    >
      {{ title }}
    </h2>
    <canvas
      ref="canvas"
      id="myChart"
      width="200"
      :style="{ maxHeight }"
    ></canvas>
  </div>
</template>

<script lang="ts">
import { Chart, ChartConfiguration, ChartItem } from 'chart.js';
import { defineComponent, Ref, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: false,
    },
    collection: {
      type: Object as () => { [key: string]: number },
      required: true,
    },
  },
  setup() {
    const chart: Ref<Chart | null> = ref(null);
    const { t } = useI18n({ inheritLocale: true });

    return {
      chart,
      t,
    };
  },
  computed: {
    labels(): string[] {
      return Object.keys(this.collection);
    },
    data(): number[] {
      return Object.values(this.collection);
    },
    config(): ChartConfiguration {
      const { data, labels } = this;

      return {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              indexAxis: 'y',
              data,
              backgroundColor: ['#04785788', '#374151bb'],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          scales: {
            xAxis: {
              max: 100,
            },
            yAxes: {
              ticks: {
                font: {
                  size: 16,
                },
              },
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
    maxHeight() {
      return `${this.data.length * 45}px`;
    },
  },
  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as ChartItem;

    this.chart = new Chart(ctx, this.config);
  },
});
</script>
