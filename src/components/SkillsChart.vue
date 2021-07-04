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
      width="200"
      :style="{ height, maxHeight: height }"
    ></canvas>
  </div>
</template>

<script lang="ts">
import { Chart, ChartConfiguration, ChartItem } from 'chart.js';
import { computed, ComputedRef, defineComponent, Ref, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useIntersectionObserver } from '@/compositions';

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
  setup(props) {
    const { t } = useI18n({ inheritLocale: true });
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
    });

    const drawCanvas = (canvas: HTMLCanvasElement) => {
      const ctx = canvas.getContext('2d') as ChartItem;

      chart.value = new Chart(ctx, config.value);
    };

    return {
      ...props,
      t,
      chart,
      data,
      labels,
      config,
      ...useIntersectionObserver(({ target, isIntersecting }) => {
        if (isIntersecting && !chart.value) {
          drawCanvas(target as HTMLCanvasElement);
        }
      }),
    };
  },
  computed: {
    height(): string {
      return `${this.data.length * 45}px`;
    },
  },
  mounted() {
    this.IntersectionObserver.observe(this.$refs.canvas as HTMLCanvasElement);
  },
});
</script>
