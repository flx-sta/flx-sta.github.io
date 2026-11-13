import type { Locale } from '../i18n';
import LanguageLinks from './LanguageLinks';
import styles from './TheNavigation.module.css';

const copy = {
  en: {
    navigation: 'Main navigation',
    experience: 'Experience',
    work: 'Work',
    toolkit: 'Toolkit',
  },
  de: {
    navigation: 'Hauptnavigation',
    experience: 'Berufserfahrung',
    work: 'Projekte',
    toolkit: 'Technologien',
  },
} satisfies Record<Locale, Record<string, string>>;

export default function TheNavigation({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <header className={styles.siteHeader}>
      <div className={`page-width ${styles.headerInner}`}>
        <a className={styles.brand} href="#about-me">
          <img src="/favicon.svg" alt="" width="28" height="28" />
          <span>Felix Staud</span>
        </a>
        <nav aria-label={text.navigation} className={styles.navLinks}>
          <a href="#experience">{text.experience}</a>
          <a href="#projects">{text.work}</a>
          <a href="#skills">{text.toolkit}</a>
        </nav>
        <LanguageLinks locale={locale} className={styles.headerLanguage} />
      </div>
    </header>
  );
}
