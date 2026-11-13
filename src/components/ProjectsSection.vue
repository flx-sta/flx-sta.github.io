<template>
  <SectionWrapper :title="t('title')" :description="t('description')">
    <div class="project-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="t(project.key)"
        :tags-label="t('technologies')"
        :tags="project.tags"
        :links="project.links.map(({ label, url }) => ({ label: t(label), url }))"
      />
    </div>
    <details class="archive">
      <summary>{{ t('archive') }}</summary>
      <ul>
        <li v-for="project in archive" :key="project.url">
          <a :href="project.url">{{ project.title }}</a>
        </li>
      </ul>
    </details>
  </SectionWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectCard from './ProjectCard.vue';
import SectionWrapper from './SectionWrapper.vue';

const projects = [
  {
    key: 'pokerogue',
    title: 'PokéRogue',
    tags: ['TypeScript', 'Phaser', 'Localization'],
    links: [
      { label: 'github', url: 'https://github.com/pagefaultgames/pokerogue' },
      { label: 'contribution', url: 'https://github.com/pagefaultgames/pokerogue/pull/4583' },
      { label: 'website', url: 'https://pokerogue.net/' },
    ],
  },
  {
    key: 'peregrine',
    title: 'Peregrine CMS',
    tags: ['Vue.js', 'Java', 'Apache Sling'],
    links: [
      { label: 'github', url: 'https://github.com/headwirecom/peregrine-cms' },
      { label: 'contribution', url: 'https://github.com/headwirecom/peregrine-cms/pull/935' },
    ],
  },
  {
    key: 'memmy',
    title: 'Memmy for Lemmy',
    tags: ['React Native', 'TypeScript'],
    links: [
      { label: 'github', url: 'https://github.com/Memmy-App/memmy' },
      { label: 'contribution', url: 'https://github.com/Memmy-App/memmy/pull/946' },
    ],
  },
  {
    key: 'flashpoint',
    title: 'Flashpoint Launcher',
    tags: ['Electron', 'TypeScript'],
    links: [
      { label: 'github', url: 'https://github.com/FlashpointProject/launcher' },
      { label: 'contribution', url: 'https://github.com/FlashpointProject/launcher/pull/234' },
      { label: 'website', url: 'https://flashpointarchive.org/' },
    ],
  },
];

const archive = [
  { title: 'RaftModding', url: 'https://www.raftmodding.com/' },
  { title: 'COVID-19 Dashboard', url: 'https://github.com/flx-sta/simple-covid-dashboard' },
];

export default defineComponent({
  components: { ProjectCard, SectionWrapper },
  setup() {
    const { t } = useI18n({ inheritLocale: true });
    return { t, projects, archive };
  },
});
</script>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.archive {
  margin-top: 1.5rem;
  color: var(--muted);
  font-size: 0.92rem;
}

.archive summary {
  width: fit-content;
  cursor: pointer;
  font-weight: 650;
}

.archive ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 1.25rem;
  margin-top: 0.65rem;
}

.archive a {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

@media (max-width: 640px) {
  .project-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>

<i18n lang="yaml">
en:
  title: Selected work
  description: Open source projects I’ve contributed to.
  technologies: Technologies
  github: GitHub
  contribution: Example PR
  website: Website
  archive: Older projects
  pokerogue: >-
    A browser game inspired by Pokémon and roguelites. I refactored the
    game’s API client and helped introduce Mozilla Pontoon for localization.
  peregrine: >-
    A CMS built on Apache Sling and Vue. I integrated CodeMirror into
    its structured content editor.
  memmy: >-
    A mobile client for Lemmy inspired by Apollo. I contributed fixes
    to the app’s localization.
  flashpoint: >-
    A desktop launcher for Flashpoint Archive, which preserves web games
    and animations. I added sortable columns to the launcher.
de:
  title: Ausgewählte Projekte
  description: Open-Source-Projekte, zu denen ich beigetragen habe.
  technologies: Technologien
  github: GitHub
  contribution: Beispiel-PR
  website: Website
  archive: Ältere Projekte
  pokerogue: >-
    Ein von Pokémon und Roguelites inspiriertes Browserspiel. Ich habe
    den API-Client überarbeitet und Mozilla Pontoon für die Lokalisierung
    mit eingeführt.
  peregrine: >-
    Ein CMS auf Basis von Apache Sling und Vue. Ich habe CodeMirror
    in den Editor für strukturierte Inhalte integriert.
  memmy: >-
    Ein von Apollo inspirierter mobiler Client für Lemmy. Ich habe
    Fehler in der Lokalisierung der App behoben.
  flashpoint: >-
    Ein Desktop-Launcher für Flashpoint Archive, ein Archiv für
    Webspiele und Animationen. Ich habe sortierbare Spalten hinzugefügt.
</i18n>
