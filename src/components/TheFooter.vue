<template>
  <div
    id="footer"
    class="
      footer
      w-full
      grid grid-cols-2
      items-center
      lg:px-7
      px-3
      py-5
      bg-gray-700
      dark:bg-gray-800
      text-white
      duration-500
      transition
    "
  >
    <div class="justify-self-start">&copy; {{ fullYear }} Felix Pütz</div>
    <div class="group justify-self-end">
      <fa-icon
        icon="envelope"
        class="mr-1 opacity-0 group-hover:opacity-100 transition"
      ></fa-icon>
      <a :href="`mailto:${mail.to}?subject=${mail.subject}`" target="_blank">
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
    const mail = {
      to: 'info@felix-puetz.com',
      subject: `${t('contact')} via felix-puetz.com`,
    };

    return {
      t,
      fullYear: new Date().getFullYear(),
      mail,
    };
  },
});
</script>

<i18n lang="yaml">
en:
  contact: Contact
de:
  contact: Kontakt
</i18n>
