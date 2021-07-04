<template>
  <SectionWrapper :title="t('title')">
    <div
      class="project-card-wrapper grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10"
    >
      <ProjectCard
        v-for="project in projects"
        :img="project.img"
        :title="project.title"
        :links="project.links"
      >
        <div v-html="project.description"></div>
      </ProjectCard>
    </div>
  </SectionWrapper>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import ProjectCard from './ProjectCard.vue';
import SectionWrapper from './SectionWrapper.vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  components: {
    SectionWrapper,
    ProjectCard,
  },
  setup() {
    const { t } = useI18n({ inheritLocale: true });

    const projects = computed(() => [
      {
        title: 'RaftModding',
        img: 'https://www.raftmodding.com/images/raftmodding.png',
        description: t(`raftmodding.description`),
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com/raftmodding/web-monorepo',
            icon: ['fab', 'github'],
          },
          {
            title: t('Website'),
            url: 'https://www.raftmodding.com/',
            icon: ['fas', 'link'],
          },
        ],
      },
      {
        title: 'peregrine-cms',
        img: 'https://www.peregrine-cms.com/content/peregrine_cms/assets/media/peregrine_logo.svg',
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com/headwirecom/peregrine-cms',
            icon: ['fab', 'github'],
          },
          {
            title: t('Website'),
            url: 'https://www.peregrine-cms.com',
            icon: ['fas', 'link'],
          },
        ],
        description: t(`peregrineCms.description`),
      },
      {
        title: 'almost-no-durability mod',
        img: 'https://raw.githubusercontent.com/Felix-Puetz/raft-mods/main/almost-no-durability/almost-no-durability/icon.png',
        description: t(`almostNoDurabilityMod.description`),
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com/Felix-Puetz/raft-mods/tree/main/almost-no-durability',
            icon: ['fab', 'github'],
          },
          {
            title: t('Website'),
            url: 'https://www.raftmodding.com/mods/almost-no-durability',
            icon: ['fas', 'link'],
          },
        ],
      },
    ]);

    return {
      projects,
      t,
    };
  },
});
</script>

<i18n lang="yaml">
en:
  title: Projects
  Website: Website
  raftmodding:
    description: A website to share mods/tools for the Videogame <a class=" underline text-blue-600 hover:text-blue-800 visited:text-purple-600 " href="https://store.steampowered.com/app/648800/Raft/" target="_blank" >Raft</a>.
  peregrineCms:
    description: An api first, head optional cms with based on vuejs and apache sling.
  almostNoDurabilityMod:
    description: A small <a class=" underline text-blue-600 hover:text-blue-800 visited:text-purple-600 " href="https://store.steampowered.com/app/648800/Raft/" target="_blank" >Raft</a> mod to increate item durability. Originally coded by me
de:
  title: Projekte
  Website: Webseite
  raftmodding:
    description: Eine Webseite um Mods/Tools für das Computerspiel <a class=" underline text-blue-600 hover:text-blue-800 visited:text-purple-600 " href="https://store.steampowered.com/app/648800/Raft/" target="_blank" >Raft</a> zu teilen.
  peregrineCms:
    description: Eine API-first, head optional CMS das auf Vue.js und Apache-Sling basiert.
  almostNoDurabilityMod:
    description: Ein kleiner <a class=" underline text-blue-600 hover:text-blue-800 visited:text-purple-600 " href="https://store.steampowered.com/app/648800/Raft/" target="_blank" >Raft</a> mod der die Haltbarkeit von Gegenständen verbessert. Orignal von mir entwickelt.
</i18n>
