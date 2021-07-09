<template>
  <div
    :key="theme"
    class="
      skills-chart
      flex flex-col
      items-center
      w-full
      border-2
      p-5
      shadow-lg
      transform
      rounded-lg
      duration-500
      dark:bg-gray-800
      hover:scale-105
      transition
    "
  >
    <h2
      class="
        capitalize
        text-2xl text-gray-700
        dark:text-gray-200
        mb-2
        pb-2
        border-b-2 border-gray-300
        w-10/12
        text-center
        break-all
        transition
        duration-500
      "
    >
      {{ title }}
    </h2>
    <canvas
      ref="canvas"
      width="1"
      :style="{ height, maxHeight: height }"
    ></canvas>
  </div>
</template>

<script lang="ts">
import { useIntersectionObserver } from '@/compositions';
import { state } from '@/state';
import { Chart, ChartConfiguration, ChartItem } from 'chart.js';
import { computed, ComputedRef, defineComponent, Ref, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'SkillsChart',
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
  setup(props) {
    const { t } = useI18n({ inheritLocale: true });
    const theme = computed(() => state.theme);
    const { IntersectionObserver } = useIntersectionObserver(
      ({ target, isIntersecting }) => {
        if (isIntersecting && !chart.value) {
          drawChart(target as HTMLCanvasElement);
        }
      },
    );
    const chart: Ref<Chart | null> = ref(null);
    const labels = computed(() => {
      return Object.keys(props.collection);
    });
    const data = computed(() => {
      return Object.values(props.collection);
    });
    const config: ComputedRef<ChartConfiguration> = computed(() => {
      return {
        type: 'bar',
        data: {
          labels: labels.value,
          datasets: [
            {
              indexAxis: 'y',
              data: data.value,
              backgroundColor: [
                theme.value === 'light' ? '#04785788' : '#10B98188',
                theme.value === 'light' ? '#374151bb' : '#D1D5DBbb',
              ],
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
              ticks: {
                color: theme.value === 'light' ? '#37415133' : '#D1D5DB33',
              },
            },
            yAxes: {
              ticks: {
                color: theme.value === 'light' ? '#374151' : '#D1D5DB',
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
    });

    const drawChart = (canvas: HTMLCanvasElement) => {
      const ctx = canvas.getContext('2d') as ChartItem;

      chart.value = new Chart(ctx, config.value);
    };

    return {
      t,
      theme,
      chart,
      data,
      labels,
      config,
      IntersectionObserver,
      drawChart,
    };
  },
  computed: {
    height(): string {
      return `${this.data.length * 45}px`;
    },
  },
  watch: {
    theme() {
      this.$nextTick(() => {
        this.drawChart(this.$refs.canvas as HTMLCanvasElement);
      });
    },
  },
  mounted() {
    this.IntersectionObserver.observe(this.$refs.canvas as HTMLCanvasElement);
  },
});
</script>
