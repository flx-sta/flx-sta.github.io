import { contactHref } from '../contact';
import type { Locale } from '../i18n';
import styles from './TheFooter.module.css';
const copy = {
  en: { contact: 'Contact', source: 'Site source' },
  de: { contact: 'Kontakt', source: 'Quellcode der Website' },
} satisfies Record<Locale, { contact: string; source: string }>;
export default function TheFooter({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <footer className={styles.siteFooter}>
      <div className={`page-width ${styles.footerInner}`}>
        <span>&copy; {new Date().getFullYear()} Felix Staud</span>
        <div className={styles.footerLinks}>
          <a href={contactHref}>{text.contact}</a>
          <a href="https://github.com/flx-sta/flx-sta.github.io">
            {text.source}
          </a>
        </div>
      </div>
    </footer>
  );
}
