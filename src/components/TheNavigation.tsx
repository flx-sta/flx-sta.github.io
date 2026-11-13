import { localeLinks, type Locale } from '../i18n';
import styles from './TheNavigation.module.css';

const copy = {
  en: {
    navigation: 'Main navigation',
    experience: 'Experience',
    work: 'Work',
    toolkit: 'Toolkit',
    theme: 'Color theme',
    language: 'Language',
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
    language: 'Sprache',
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
        <a className={styles.brand} href="#about-me" data-section-link="">
          <img src="/favicon.svg" alt="" width="28" height="28" />
          <span>Felix Staud</span>
        </a>
        <nav aria-label={text.navigation} className={styles.navLinks}>
          <a href="#experience" data-section-link="">
            {text.experience}
          </a>
          <a href="#projects" data-section-link="">
            {text.work}
          </a>
          <a href="#skills" data-section-link="">
            {text.toolkit}
          </a>
        </nav>
        <div className={styles.headerControls}>
          <div className={styles.selectControl} hidden>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
            </svg>
            <select id="color-theme" aria-label={text.theme} title={text.theme}>
              <option value="system">{text.system}</option>
              <option value="light">{text.light}</option>
              <option value="dark">{text.dark}</option>
            </select>
          </div>
          <div className={styles.selectControl} hidden>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="9" />
              <ellipse cx="12" cy="12" rx="4" ry="9" />
              <path d="M3 12h18" />
            </svg>
            <select
              id="site-language"
              aria-label={text.language}
              title={text.language}
              defaultValue={
                localeLinks.find(({ code }) => code === locale)?.href
              }
            >
              {localeLinks.map(({ code, href, name }) => (
                <option key={code} value={href} lang={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <noscript>
            <nav className={styles.languageFallback} aria-label={text.language}>
              {localeLinks.map(({ code, href, label, name }) => (
                <a
                  key={code}
                  href={href}
                  lang={code}
                  {...{ hreflang: code }}
                  aria-label={name}
                  aria-current={code === locale ? 'page' : undefined}
                >
                  {label}
                </a>
              ))}
            </nav>
          </noscript>
        </div>
      </div>
    </header>
  );
}
