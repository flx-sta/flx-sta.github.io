<template>
  <div
    class="
      w-full
      py-4
      px-8
      mt-10
      bg-white
      shadow-lg
      rounded-lg
      border-2
      transition-all
      duration-500
      hover:px-6
    "
  >
    <div class="flex justify-center md:justify-end -mt-16">
      <img class="w-20 h-20 object-cover rounded-full border-2" :src="img" />
    </div>
    <div>
      <h2 class="text-gray-800 text-3xl font-semibold">{{ title }}</h2>
      <p class="mt-2 text-gray-600">
        <slot></slot>
      </p>
    </div>
    <div class="flex justify-around items-stretch mt-10 w-full">
      <a
        v-for="link in links"
        class="link"
        :href="link.url"
        target="_blank"
        :title="link.title"
      >
        <fa-icon
          :icon="link.icon"
          size="2x"
          class="text-gray-700 hover:text-green-700 transition-colors"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface ProjectLink {
  url: string;
  icon: string | string[];
  title: string;
}

interface ProjectTag {
  title: string;
  icon: string | string[];
}

export default defineComponent({
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array as () => ProjectLink[],
      required: true,
    },
    tags: {
      type: Array as () => ProjectTag[],
    },
  },
});
</script>
