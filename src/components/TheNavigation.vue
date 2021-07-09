<template>
  <Disclosure
    as="nav"
    class="bg-gray-700 dark:bg-gray-900 fixed inset-x-0 top-0 z-20 w-full shadow-lg transition duration-500"
    v-slot="{ open }"
  >
    <div class="max-w-full w-full px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center h-16">
        <div class="inset-y-0 left-0 flex items-center sm:hidden">
          <div class="w-10">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="
                inline-flex
                items-center
                justify-center
                p-2
                rounded-md
                text-gray-400
                hover:text-white hover:bg-gray-700
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-white
              "
            >
              <span class="sr-only">{{ t('sr.mainMenu') }}</span>
              <fa-icon
                icon="bars"
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <fa-icon
                icon="times"
                v-else
                class="block h-6 w-6"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>
        </div>
        <div class="flex items-center justify-between h-full w-full">
          <div class="flex items-center">
            <img class="block h-9 w-auto" src="@/assets/logo.svg" alt="Logo" />
          </div>
          <h1
            class="
              flex
              items-center
              ml-5
              text-white text-xl
              lg:text-3xl
              tracking-wider
            "
          >
            Felix Pütz
          </h1>
          <div class="hidden sm:block ml-auto">
            <div class="flex space-x-4 h-full items-center">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.url"
                class="
                  text-gray-300
                  hover:bg-gray-700 hover:text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                >{{ item.name }}</a
              >
            </div>
          </div>
          <div class="h-16 ml-5 flex items-center">
            <LocalesDropDown />
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.url"
          class="
            text-gray-300
            hover:bg-gray-700 hover:text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
          "
          >{{ item.name }}</a
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue';
import { computed, defineComponent, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import LocalesDropDown from './LocalesDropDown.vue';

export default defineComponent({
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    LocalesDropDown,
  },
  setup() {
    const open = ref(false);
    const { t, locale } = useI18n({ inheritLocale: true });
    const navigation = computed(() => [
      { name: t('aboutMe.title'), url: '#about-me' },
      { name: t('skills.title'), url: '#skills' },
      { name: t('projects.title'), url: '#projects' },
    ]);

    return {
      navigation,
      open,
      t,
      locale,
    };
  },
});
</script>

<i18n lang="yaml">
en:
  aboutMe:
    title: About Me
  skills:
    title: Skills
  projects:
    title: Projects
  sr:
    mainMenu: Open menu
de:
  aboutMe:
    title: Über Mich
  skills:
    title: Kompetenzen
  projects:
    title: Projekte
  sr:
    mainMenu: Menü öffnen
</i18n>
