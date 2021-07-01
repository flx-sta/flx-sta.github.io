<template>
  <SectionWrapper title="Projects">
    <div class="project-card-wrapper flex flex-column flex-wrap mt-10">
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
import { defineComponent } from 'vue';
import ProjectCard from './ProjectCard.vue';
import SectionWrapper from './SectionWrapper.vue';

const projects = [
  {
    title: 'RaftModding',
    img: 'https://www.raftmodding.com/images/raftmodding.png',
    description: `A website to share mods/tools for the Videogame <a class=" underline text-blue-600 hover:text-blue-800 visited:text-purple-600 " href="https://store.steampowered.com/app/648800/Raft/" target="_blank" >Raft</a >`,
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/raftmodding/web-monorepo',
        icon: ['fab', 'github'],
      },
      {
        title: 'Website',
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
        title: 'Website',
        url: 'https://www.peregrine-cms.com',
        icon: ['fas', 'link'],
      },
    ],
    description: `an api first, head optional cms with based on vuejs and apache sling`,
  },
  {
    title: 'almost-no-durability mod',
    img: 'https://raw.githubusercontent.com/Felix-Puetz/raft-mods/main/almost-no-durability/almost-no-durability/icon.png',
    description: `A small <a class=" underline text-blue-600 hover:text-blue-800 visited:text-purple-600 " href="https://store.steampowered.com/app/648800/Raft/" target="_blank" >Raft</a> mod to increate item durability. Originally coded by me`,
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/Felix-Puetz/raft-mods/tree/main/almost-no-durability',
        icon: ['fab', 'github'],
      },
      {
        title: 'Download Page',
        url: 'https://www.raftmodding.com/mods/almost-no-durability',
        icon: ['fas', 'link'],
      },
    ],
  },
];

export default defineComponent({
  components: {
    SectionWrapper,
    ProjectCard,
  },
  setup() {
    return {
      projects,
    };
  },
});
</script>
