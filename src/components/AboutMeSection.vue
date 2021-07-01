<template>
  <SectionWrapper title="About Me">
    <div
      class="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-32 lg:my-0"
    >
      <!--Main Col-->
      <div
        id="profile"
        class="
          w-full
          lg:w-3/5
          rounded-lg
          lg:rounded-l-lg lg:rounded-r-none
          shadow-2xl
          bg-white
          opacity-75
          mx-6
          lg:mx-0
        "
      >
        <div class="p-4 md:p-12 text-center lg:text-left">
          <!-- Image for mobile view-->
          <div
            class="
              block
              lg:hidden
              rounded-full
              shadow-xl
              mx-auto
              -mt-16
              h-48
              w-48
              bg-cover bg-center
            "
            :style="{
              backgroundImage: `url(${profilePicture})`,
              backgroundPosition: '0px -18px',
            }"
          ></div>

          <h1 class="text-3xl font-bold pt-8 lg:pt-0">Felix Pütz</h1>
          <div
            class="
              mx-auto
              lg:mx-0
              w-4/5
              pt-3
              border-b-2 border-green-500
              opacity-25
            "
          ></div>
          <p
            class="
              pt-4
              text-base
              font-bold
              flex
              items-center
              justify-center
              lg:justify-start
            "
          >
            <fa-icon icon="briefcase" class="h-5 w-5 mr-4 text-green-700" />
            Front-End Developer
          </p>
          <p
            class="
              pt-2
              text-gray-600 text-xs
              lg:text-sm
              flex
              items-center
              justify-center
              lg:justify-start
            "
          >
            <fa-icon icon="map-marker-alt" class="h5 w-5 mr-4 text-green-700" />
            Cologne, Germany
          </p>
          <p class="py-8 text-sm">
            Here will be a short description of myself in the future.<br />
            About stuff I did.<br />
            About stuff i do
          </p>

          <div
            class="
              mt-6
              pb-16
              lg:pb-0
              w-4/5
              lg:w-full
              mx-auto
              flex flex-wrap
              items-center
              justify-between
            "
          >
            <a
              v-for="contactLink in contactLinks"
              :key="contactLink.title"
              class="link"
              :href="contactLink.url"
              target="_blank"
              :title="contactLink.title"
            >
              <fa-icon
                :icon="contactLink.icon"
                size="2x"
                class="text-gray-700 hover:text-green-700 transition-colors"
              />
            </a>
          </div>

          <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->
        </div>
      </div>

      <!--Img Col-->
      <div class="w-full lg:w-2/5">
        <!-- Big profile image for side bar (desktop) -->
        <img
          src="@/assets/profile-picture.jpg"
          class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        />
        <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->
      </div>
    </div>
  </SectionWrapper>
</template>

<script lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import profilePicture from '@/assets/profile-picture.jpg';
import SectionWrapper from './SectionWrapper.vue';

const contactLinks = [
  {
    title: 'GitHub',
    url: 'https://github.com/Felix-Puetz',
    icon: ['fab', 'github'],
  },
  {
    title: 'Mail',
    url: 'mailto:FPuetz@gmx.net?subject=Website contact',
    icon: 'paper-plane',
  },
  {
    title: 'Xing',
    url: 'https://www.xing.com/profile/Felix_Puetz4/cv',
    icon: ['fab', 'xing'],
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/felix-p%C3%BCtz-28188719a/',
    icon: ['fab', 'linkedin'],
    hoverColor: '#2867B2',
  },
];

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    SectionWrapper,
  },
  setup() {
    return {
      navigation,
      profilePicture,
      contactLinks,
    };
  },
};
</script>
