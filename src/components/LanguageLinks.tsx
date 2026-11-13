import { localeLinks, type Locale } from '../i18n';
import styles from './LanguageLinks.module.css';

const labels = { en: 'Language', de: 'Sprache' } satisfies Record<
  Locale,
  string
>;

export default function LanguageLinks({
  locale,
  className = '',
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <nav
      className={`${styles.languageLinks} ${className}`.trim()}
      aria-label={labels[locale]}
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h16.8" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3a17 17 0 0 1 0 18" />
      </svg>
      {localeLinks.map((language) => (
        <a
          key={language.code}
          href={language.href}
          lang={language.code}
          {...{ hreflang: language.code }}
          aria-label={`${language.label} — ${language.name}`}
          aria-current={language.code === locale ? 'page' : undefined}
        >
          {language.label}
        </a>
      ))}
    </nav>
  );
}
