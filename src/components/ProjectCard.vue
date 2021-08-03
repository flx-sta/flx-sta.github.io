<template>
  <div
    class="
      w-full
      py-4
      px-8
      mt-10
      bg-white
      dark:bg-gray-800
      shadow-lg
      rounded-lg
      border-2
      dark:border-gray-600
      transform
      duration-500
      hover:scale-105
    "
  >
    <div class="flex justify-center md:justify-end -mt-16">
      <img
        class="
          w-20
          h-20
          object-cover
          rounded-full
          border-2
          bg-white
          dark:bg-gray-800 dark:border-gray-600
          duration-500
          transition
        "
        :src="img"
        :alt="`${title}-logo`"
      />
    </div>
    <div>
      <h2 class="text-gray-800 dark:text-gray-200 text-3xl font-semibold break-words">
        {{ title }}
      </h2>
      <p class="mt-2 text-gray-600 dark:text-gray-300">
        <slot></slot>
      </p>
    </div>
    <div class="tags mb-5 mt-5">
      <AppTag v-for="tag in tags" v-bind="tag" />
    </div>
    <div class="flex justify-around items-stretch w-full">
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
          class="
            text-gray-700
            dark:text-gray-300
            hover:text-green-700
            dark:hover:text-green-500
            transition-colors
          "
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppTag from './AppTag.vue';

interface ProjectLink {
  url: string;
  icon: string | string[];
  title: string;
}

interface ProjectTag {
  title: string;
  icon?: string | string[];
  img?: string;
}

export default defineComponent({
  components: {
    AppTag,
  },
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
