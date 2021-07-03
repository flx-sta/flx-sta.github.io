<template>
  <div class="dropdown-wrapper relative" :title="t('Change language')">
    <button
      @click="show = !show"
      class="
        text-gray-400
        py-2
        px-2
        whitespace-no-wrap
        rounded
        transition
        duration-300
        w-20
        uppercase
      "
    >
      <fa-icon icon="globe" /> {{ locale }}
    </button>
    <div
      v-if="show"
      class="
        bg-gray-600
        dropdown-menu
        text-white
        mt-1
        rounded
        absolute
        z-10
        shadow-lg
        w-auto
      "
    >
      <ul class="list-none overflow-hidden rounded">
        <li v-for="item in items">
          <a
            href="#"
            class="
              flex
              items-center
              justify-between
              w-20
              py-3
              px-3
              transition
              duration-300
              hover:bg-gray-500
              right-0
              uppercase
            "
            @click.prevent="select(item)"
          >
            {{ item }}
            <fa-icon icon="check" :class="{ 'opacity-0': item !== locale }" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import i18n from '../i18n';

export default defineComponent({
  setup() {
    const items = reactive(['en', 'de']);
    const show = ref(false);
    const { t, locale } = useI18n({ inheritLocale: true });

    return {
      show,
      items,
      t,
      locale,
    };
  },
  methods: {
    select(item: string) {
      i18n.global.locale.value = item;
      this.show = false;
      localStorage.setItem('locale', item);
    },
  },
});
</script>

<i18n lang="yaml">
en:
  Change language: Change language
de:
  Change language: Sprache ändern
</i18n>
