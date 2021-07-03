<template>
  <div
    id="footer"
    class="
      footer
      w-full
      flex
      items-center
      justify-between
      p-3
      bg-gray-700
      text-white
    "
  >
    <div>&copy; {{ fullYear }} Felix Pütz</div>
    <div>
      <a href="mailto:fpuetz@gmx.net?subject=contact via felix-puetz.com">
        {{ t('contact') }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n({ inheritLocale: true });

    return {
      t,
      fullYear: new Date().getFullYear(),
    };
  },
  components: {},
});
</script>

<i18n lang="yaml">
  en:
    contact: Contact
  de:
    contact: Kontakt
  </i18n>
  