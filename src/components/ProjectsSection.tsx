import type { Locale } from '../i18n';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';
import styles from './ProjectsSection.module.css';

const projects = [
  {
    key: 'pokerogue',
    title: 'PokéRogue',
    repository: 'pagefaultgames/pokerogue',
    tags: ['TypeScript', 'Phaser', 'Localization'],
    links: [
      {
        label: 'apiRefactor',
        url: 'https://github.com/pagefaultgames/pokerogue/pull/4583',
      },
      { label: 'website', url: 'https://pokerogue.net/' },
    ],
  },
  {
    key: 'pontoon',
    title: 'Mozilla Pontoon',
    repository: 'mozilla/pontoon',
    tags: ['TypeScript', 'React', 'i18next'],
    links: [
      {
        label: 'sourceHighlighting',
        url: 'https://github.com/mozilla/pontoon/pull/3328',
      },
      {
        label: 'editorHighlighting',
        url: 'https://github.com/mozilla/pontoon/pull/3341',
      },
      { label: 'website', url: 'https://pontoon.mozilla.org/' },
    ],
  },
  {
    key: 'vitest',
    title: 'Vitest',
    repository: 'vitest-dev/vitest',
    tags: ['TypeScript', 'Vite'],
    links: [
      {
        label: 'reporterLinkFix',
        url: 'https://github.com/vitest-dev/vitest/pull/9649',
      },
      { label: 'website', url: 'https://vitest.dev/' },
    ],
  },
  {
    key: 'memmy',
    title: 'Memmy for Lemmy',
    repository: 'Memmy-App/memmy',
    tags: ['React Native', 'TypeScript'],
    links: [
      {
        label: 'translationFixes',
        url: 'https://github.com/Memmy-App/memmy/pull/946',
      },
    ],
  },
  {
    key: 'flashpoint',
    title: 'Flashpoint Launcher',
    repository: 'FlashpointProject/launcher',
    tags: ['Electron', 'TypeScript'],
    links: [
      {
        label: 'sortableColumns',
        url: 'https://github.com/FlashpointProject/launcher/pull/234',
      },
      { label: 'website', url: 'https://flashpointarchive.org/' },
    ],
  },
] as const;
const pullRequestQuery = new URLSearchParams({
  q: 'is:pr is:merged author:flx-sta',
});
const archive = [
  { title: 'RaftModding', url: 'https://www.raftmodding.com/' },
  {
    title: 'COVID-19 Dashboard',
    url: 'https://github.com/flx-sta/simple-covid-dashboard',
  },
] as const;
const copy = {
  en: {
    title: 'Selected work',
    description: 'Open source projects I’ve contributed to.',
    technologies: 'Technologies',
    github: 'GitHub',
    myPullRequests: 'My PRs',
    apiRefactor: 'API client refactor',
    sourceHighlighting: 'Source highlighting PR',
    editorHighlighting: 'Editor highlighting PR',
    reporterLinkFix: 'Reporter link fix',
    translationFixes: 'Translation fixes',
    sortableColumns: 'Sortable columns',
    website: 'Website',
    archive: 'Older projects',
    pokerogue:
      'A browser game inspired by Pokémon and roguelites. I refactored the game’s API client and helped introduce Mozilla Pontoon for localization.',
    pontoon:
      'Mozilla’s localization platform. I fixed i18next placeholder highlighting in source strings, added it to the translation editor, and wrote regression tests for both.',
    vitest:
      'A testing framework built on Vite. I updated the documentation and fixed a broken link in the CLI warning for hanging processes.',
    memmy:
      'A mobile client for Lemmy inspired by Apollo. I contributed fixes to the app’s localization.',
    flashpoint:
      'A desktop launcher for Flashpoint Archive, which preserves web games and animations. I added sortable columns to the launcher.',
  },
  de: {
    title: 'Ausgewählte Projekte',
    description: 'Open-Source-Projekte, zu denen ich beigetragen habe.',
    technologies: 'Technologien',
    github: 'GitHub',
    myPullRequests: 'Meine PRs',
    apiRefactor: 'API-Client überarbeitet',
    sourceHighlighting: 'Quelltext-Hervorhebung (PR)',
    editorHighlighting: 'Editor-Hervorhebung (PR)',
    reporterLinkFix: 'Reporter-Link korrigiert',
    translationFixes: 'Übersetzungen korrigiert',
    sortableColumns: 'Sortierbare Spalten',
    website: 'Website',
    archive: 'Ältere Projekte',
    pokerogue:
      'Ein von Pokémon und Roguelites inspiriertes Browserspiel. Ich habe den API-Client überarbeitet und Mozilla Pontoon für die Lokalisierung mit eingeführt.',
    pontoon:
      'Mozillas Plattform für Lokalisierung. Ich habe die Hervorhebung von i18next-Platzhaltern im Quelltext korrigiert, im Übersetzungseditor ergänzt und beides mit Regressionstests abgesichert.',
    vitest:
      'Ein Testframework auf Basis von Vite. Ich habe die Dokumentation verbessert und einen defekten Link in der CLI-Warnung für hängende Prozesse korrigiert.',
    memmy:
      'Ein von Apollo inspirierter mobiler Client für Lemmy. Ich habe Fehler in der Lokalisierung der App behoben.',
    flashpoint:
      'Ein Desktop-Launcher für Flashpoint Archive, ein Archiv für Webspiele und Animationen. Ich habe sortierbare Spalten hinzugefügt.',
  },
} satisfies Record<Locale, Record<string, string>>;

export default function ProjectsSection({
  id,
  locale,
}: {
  id: string;
  locale: Locale;
}) {
  const text = copy[locale];
  return (
    <SectionWrapper id={id} title={text.title} description={text.description}>
      <div className={styles.projectGrid}>
        {projects.map((project) => {
          const repositoryUrl = `https://github.com/${project.repository}`;

          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={text[project.key]}
              tagsLabel={text.technologies}
              tags={project.tags}
              links={[
                { label: text.github, url: repositoryUrl },
                {
                  label: text.myPullRequests,
                  url: `${repositoryUrl}/pulls?${pullRequestQuery}`,
                },
                ...project.links.map((link) => ({
                  label: text[link.label],
                  url: link.url,
                })),
              ]}
            />
          );
        })}
      </div>
      <details className={styles.archive}>
        <summary>{text.archive}</summary>
        <ul>
          {archive.map((project) => (
            <li key={project.url}>
              <a href={project.url}>{project.title}</a>
            </li>
          ))}
        </ul>
      </details>
    </SectionWrapper>
  );
}
