import type { Locale } from '../i18n';
import LanguageLinks from './LanguageLinks';
import styles from './TheNavigation.module.css';

const copy = {
  en: {
    navigation: 'Main navigation',
    experience: 'Experience',
    work: 'Work',
    toolkit: 'Toolkit',
    theme: 'Color theme',
    system: 'System',
    light: 'Light',
    dark: 'Dark',
  },
  de: {
    navigation: 'Hauptnavigation',
    experience: 'Berufserfahrung',
    work: 'Projekte',
    toolkit: 'Technologien',
    theme: 'Farbschema',
    system: 'System',
    light: 'Hell',
    dark: 'Dunkel',
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
        <div className={styles.headerControls}>
          <select
            id="color-theme"
            className={styles.themeSelect}
            aria-label={text.theme}
            title={text.theme}
            hidden
          >
            <option value="system">{text.system}</option>
            <option value="light">{text.light}</option>
            <option value="dark">{text.dark}</option>
          </select>
          <LanguageLinks locale={locale} />
        </div>
      </div>
    </header>
  );
}
