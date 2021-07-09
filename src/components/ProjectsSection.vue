<template>
  <SectionWrapper :title="t('title')">
    <div
      class="project-card-wrapper grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10"
    >
      <ProjectCard v-for="project in projects" v-bind="project">
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
        tags: [
          { title: 'vue3', icon: ['fab', 'vuejs'] },
          { title: 'ts' },
          { title: 'scss', icon: ['fab', 'sass'] },
          { title: 'nodejs', icon: ['fab', 'node-js'] },
        ],
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
        tags: [
          { title: 'vue2', icon: ['fab', 'vuejs'] },
          { title: 'js', icon: ['fab', 'js'] },
          { title: 'scss', icon: ['fab', 'sass'] },
          { title: 'java', icon: ['fab', 'java'] },
        ],
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
        tags: [{ title: 'C#'}],
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
      {
        title: 'portfolio',
        img: 'https://raw.githubusercontent.com/Felix-Puetz/portfolio/main/src/assets/logo.svg',
        description: t(`portfolio.description`),
        tags: [
          { title: 'vue3', icon: ['fab', 'vuejs'] },
          { title: 'ts' },
          { title: 'tailwind' },
        ],
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com/Felix-Puetz/portfolio',
            icon: ['fab', 'github'],
          },
          {
            title: t('Website'),
            url: 'https://www.felix-puetz.com/#',
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
    description: A website to share mods/tools for the Videogame Raft.
  peregrineCms:
    description: An api first, head optional cms with based on vuejs and apache sling.
  almostNoDurabilityMod:
    description: A small Raft mod to increate item durability. Originally coded by me
  portfolio:
    description: The GitHub project for this website. Auto deployment via netlify.
de:
  title: Projekte
  Website: Webseite
  raftmodding:
    description: Eine Webseite um Mods/Tools für das Computerspiel Raft zu teilen.
  peregrineCms:
    description: Eine API-first, head optional CMS das auf Vue.js und Apache-Sling basiert.
  almostNoDurabilityMod:
    description: Ein kleiner Raft mod der die Haltbarkeit von Gegenständen verbessert. Orignal von mir entwickelt.
  portfolio:
    description: Das GitHub Projekt für diese Webseite. Auto deployment via netlify.
</i18n>
