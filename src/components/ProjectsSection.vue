<template>
  <SectionWrapper :title="t('title')">
    <div
      class="project-card-wrapper grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10"
    >
      <ProjectCard v-for="project in projects" v-bind="project" :key="project.title">
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
        title: 'Pokerogue',
        img: 'https://pokerogue.net/logo512.png',
        description: t(`pokerogue.description`),
        tags: [
          { title: 'phaser' },
          { title: 'ts' },
        ],
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com/pagefaultgames/pokerogue',
            icon: ['fab', 'github'],
          },
          {
            title: t('Website'),
            url: 'https://pokerogue.net/',
            icon: ['fas', 'link'],
          }
        ],
      },
       {
        title: 'Memmy App',
        img: 'https://avatars.githubusercontent.com/u/138403836?s=48&v=4',
        description: t(`memmy.description`),
        tags: [
          { title: 'iOS', icon: ['fab', 'apple'] },
          { title: 'react-native', icon: ['fab', 'react'] },
          { title: 'ts' },
        ],
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com/Memmy-App/memmy',
            icon: ['fab', 'github'],
          },
          {
            title: t('Website'),
            url: 'https://apps.apple.com/de/app/memmy-for-lemmy/id6450204299',
            icon: ['fas', 'link'],
          }
        ],
      },
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
        title: 'portfolio',
        img: 'https://raw.githubusercontent.com/Felix-Staud/portfolio/main/src/assets/logo.svg',
        description: t(`portfolio.description`),
        tags: [
          { title: 'vue3', icon: ['fab', 'vuejs'] },
          { title: 'ts' },
          { title: 'tailwind' },
        ],
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com/Felix-Staud/portfolio',
            icon: ['fab', 'github'],
          },
          {
            title: t('Website'),
            url: 'https://felix-staud.github.io/',
            icon: ['fas', 'link'],
          },
        ],
      },
      {
        title: 'FlashpointProject/launcher',
        img: 'https://bluemaxima.org/flashpoint/images/logo.svg',
        description: t(`flashpointProject.launcher.description`),
        tags: [{ title: 'ts' }, { title: 'css', icon: ['fab', 'css3'] }],
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com/FlashpointProject/launcher',
            icon: ['fab', 'github'],
          },
          {
            title: t('Website'),
            url: 'http://bluemaxima.org/flashpoint/',
            icon: ['fas', 'link'],
          },
        ],
      },
      {
        title: 'simple-covid-dashboard',
        img: 'https://raw.githubusercontent.com/Felix-Staud/simple-covid-dashboard/main/public/favicon.ico',
        description: t(`simpleCovidDashboard.description`),
        tags: [
          { title: 'react', icon: ['fab', 'react'] },
          { title: 'ts' },
          { title: 'css', icon: ['fab', 'css3'] },
        ],
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com/Felix-Staud/simple-covid-dashboard',
            icon: ['fab', 'github'],
          },
          {
            title: t('Website'),
            url: 'https://felix-staud.github.io/simple-covid-dashboard/',
            icon: ['fas', 'link'],
          }
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
  pokerogue:
    description: A Pokémon fangame heavily inspired by the roguelite genre.
  raftmodding:
    description: A website to share mods/tools for the Videogame Raft.
  peregrineCms:
    description: An api first, head optional cms with based on vuejs and apache sling.
  portfolio:
    description: The GitHub project for this website. Auto deployment via github-actions.
  flashpointProject:
    launcher:
      description: The Flashpoint Launcher (FPL) is a desktop application made for browsing, storing and launching other applications (games, animations, web apps etc.). It is specifically made for BlueMaxima's Flashpoint, which is a web preservation project.
  simpleCovidDashboard:
    description: A simple dashboard that grabs the current worldwide covid19 numbers and displays them. Additionally you can load the numbers of freely choosable country via an input at the top.
  memmy:
    description: An Apollo inspired open-source iOS client for Lemmy built with React-Native.
de:
  title: Projekte
  Website: Webseite
  pokerogue:
    description: Ein Pokémon fangame, stark inspiriert durch das roguelite genre.
  raftmodding:
    description: Eine Webseite um Mods/Tools für das Computerspiel Raft zu teilen.
  peregrineCms:
    description: Eine API-first, head optional CMS das auf Vue.js und Apache-Sling basiert.
  portfolio:
    description: Das GitHub Projekt für diese Webseite. Automatisches deployment via github-actions.
  flashpointProject:
    launcher:
      description: Der Flashpoint Launcher (FPL) ist eine Desktop Applikation zum durchsuchen, speichern und starten anderer Applikationen (Games, Animationen, Webapps etc.). Es wurde speziell für BlueMaxima's Flashpoint gemacht, welches ein "web preservation" Projekt ist.
  simpleCovidDashboard:
    description: Ein simples Dashboard das die aktuellen weltweiten COVID19 Zahlen ausgibt. Über ein Eingabefeld kann außerdem ein Land ausgewählt werden um die Daten dieses Landes zu erhalten.
  memmy:
    description: Ein von "Apollo" inspirierter open-source iOS client für lemmy. Gebaut mit React-Native.
</i18n>
