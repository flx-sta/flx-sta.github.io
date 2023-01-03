<script setup lang="ts">
import {defineProps} from "vue";

export interface SkillItem {
  name: string;
  img: string;
}

defineProps<{
  items: SkillItem[];
  title: string;
}>();
</script>

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
      rounded-lg
      duration-500
      dark:bg-gray-800
      dark:border-gray-600
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
    <div class="w-full h-full">
      <div v-for="item in items"
           class="
            overflow-hidden
            relative
            max-w-md
            mx-auto
            bg-white
            shadow-lg
            ring-1
            ring-black/5
            rounded-xl
            flex
            items-center
            gap-6
            mb-2
            dark:bg-gray-700
            dark:ring-gray-600
            dark:text-gray-200">
        <img class="absolute -left-3 w-20 rounded-full shadow-lg" :alt="item.name + ' logo'" :src="item.img">
        <div class="min-w-0 py-5 pl-28 pr-5">
          <div class="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>