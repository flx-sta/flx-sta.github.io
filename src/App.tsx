import type { Locale } from './i18n';
import AboutMeSection from './components/AboutMeSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import TheFooter from './components/TheFooter';
import TheNavigation from './components/TheNavigation';
import styles from './App.module.css';

const copy = {
  en: { skip: 'Skip to content' },
  de: { skip: 'Zum Inhalt springen' },
} satisfies Record<Locale, { skip: string }>;

interface AppProps {
  locale: Locale;
  portraitSrc: string;
}

export default function App({ locale, portraitSrc }: AppProps) {
  return (
    <div className={styles.portfolio}>
      <a className={styles.skipLink} href="#main-content">
        {copy[locale].skip}
      </a>
      <TheNavigation locale={locale} />
      <main id="main-content" className="page-width" tabIndex={-1}>
        <AboutMeSection
          id="about-me"
          locale={locale}
          portraitSrc={portraitSrc}
        />
        <ExperienceSection id="experience" locale={locale} />
        <ProjectsSection id="projects" locale={locale} />
        <SkillsSection id="skills" locale={locale} />
      </main>
      <TheFooter locale={locale} />
    </div>
  );
}
