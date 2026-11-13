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
    contributions: [{ key: 'apiRefactor', number: 4583 }],
    website: 'https://pokerogue.net/',
  },
  {
    key: 'pontoon',
    title: 'Mozilla Pontoon',
    repository: 'mozilla/pontoon',
    tags: ['TypeScript', 'React', 'i18next'],
    contributions: [{ key: 'editorHighlighting', number: 3341 }],
    website: 'https://pontoon.mozilla.org/',
  },
  {
    key: 'vitest',
    title: 'Vitest',
    repository: 'vitest-dev/vitest',
    tags: ['TypeScript', 'Vite'],
    contributions: [{ key: 'reporterLinkFix', number: 9649 }],
    website: 'https://vitest.dev/',
  },
  {
    key: 'memmy',
    title: 'Memmy for Lemmy',
    repository: 'Memmy-App/memmy',
    tags: ['React Native', 'TypeScript'],
    contributions: [{ key: 'translationFixes', number: 946 }],
  },
  {
    key: 'flashpoint',
    title: 'Flashpoint Launcher',
    repository: 'FlashpointProject/launcher',
    tags: ['Electron', 'TypeScript'],
    contributions: [{ key: 'sortableColumns', number: 234 }],
    website: 'https://flashpointarchive.org/',
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
    myPullRequests: 'All my PRs',
    contributionsLabel: 'Selected contributions',
    contributions: {
      apiRefactor: {
        title: 'Refactored the game’s API client',
        description:
          'Reworked the code the game uses to communicate with its backend.',
      },
      editorHighlighting: {
        title: 'Highlighted placeholders in the translation editor',
        description:
          'Made variables visible while editing translations and added regression coverage.',
      },
      reporterLinkFix: {
        title: 'Fixed the CLI warning’s documentation link',
        description:
          'Repaired the link shown when a process prevents Vitest from exiting.',
      },
      translationFixes: {
        title: 'Fixed app translations',
        description: 'Corrected localization issues in the mobile client.',
      },
      sortableColumns: {
        title: 'Added sortable columns to the launcher',
        description:
          'Made it possible to sort entries by clicking a column header.',
      },
    },
    website: 'Website',
    archive: 'Older projects',
    pokerogue:
      'A browser game inspired by Pokémon and roguelites. I helped introduce Mozilla Pontoon for localization.',
    pontoon:
      'Mozilla’s localization platform for translating websites and software.',
    vitest: 'A testing framework built on Vite. I updated the documentation.',
    memmy: 'A mobile client for Lemmy inspired by Apollo.',
    flashpoint:
      'A desktop launcher for Flashpoint Archive, which preserves web games and animations.',
  },
  de: {
    title: 'Ausgewählte Projekte',
    description: 'Open-Source-Projekte, zu denen ich beigetragen habe.',
    technologies: 'Technologien',
    github: 'GitHub',
    myPullRequests: 'Alle meine PRs',
    contributionsLabel: 'Ausgewählte Beiträge',
    contributions: {
      apiRefactor: {
        title: 'API-Client des Spiels überarbeitet',
        description:
          'Den Code für die Kommunikation zwischen Spiel und Backend überarbeitet.',
      },
      editorHighlighting: {
        title: 'Platzhalter im Übersetzungseditor hervorgehoben',
        description:
          'Variablen beim Bearbeiten sichtbar gemacht und Regressionstests ergänzt.',
      },
      reporterLinkFix: {
        title: 'Dokumentationslink in der CLI-Warnung korrigiert',
        description:
          'Den Link in der Warnung für Prozesse repariert, die das Beenden von Vitest verhindern.',
      },
      translationFixes: {
        title: 'Übersetzungen der App korrigiert',
        description: 'Lokalisierungsfehler im mobilen Client behoben.',
      },
      sortableColumns: {
        title: 'Sortierbare Spalten im Launcher ergänzt',
        description:
          'Einträge lassen sich per Klick auf eine Spaltenüberschrift sortieren.',
      },
    },
    website: 'Website',
    archive: 'Ältere Projekte',
    pokerogue:
      'Ein von Pokémon und Roguelites inspiriertes Browserspiel. Ich habe Mozilla Pontoon für die Lokalisierung mit eingeführt.',
    pontoon: 'Mozillas Plattform zur Lokalisierung von Websites und Software.',
    vitest:
      'Ein Testframework auf Basis von Vite. Ich habe die Dokumentation verbessert.',
    memmy: 'Ein von Apollo inspirierter mobiler Client für Lemmy.',
    flashpoint:
      'Ein Desktop-Launcher für Flashpoint Archive, ein Archiv für Webspiele und Animationen.',
  },
} satisfies Record<
  Locale,
  Record<
    string,
    string | Record<string, { title: string; description: string }>
  >
>;

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
              contributionsLabel={text.contributionsLabel}
              contributions={project.contributions.map(({ key, number }) => ({
                ...text.contributions[key],
                number,
                url: `${repositoryUrl}/pull/${number}`,
              }))}
              links={[
                { label: text.github, url: repositoryUrl, icon: 'github' },
                {
                  label: text.myPullRequests,
                  icon: 'pullRequest',
                  url: `${repositoryUrl}/pulls?${pullRequestQuery}`,
                },
                ...('website' in project
                  ? [
                      {
                        label: text.website,
                        url: project.website,
                        icon: 'website' as const,
                      },
                    ]
                  : []),
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
