import { contactHref } from '../contact';
import type { Locale } from '../i18n';
import styles from './AboutMeSection.module.css';

const copy = {
  en: {
    eyebrow: 'Engineering portfolio',
    jobTitle: 'Senior Full Stack Software Engineer',
    contact: 'Get in touch',
    description:
      'I own the full lifecycle of complex features, from shaping requirements and designing the architecture to launching, supporting, and improving them in production. At headwire.com, Inc., I’ve owned the frontend architecture and backend integrations for account management on a golf media platform. I bring more than a decade of engineering experience and have led teams of up to ten engineers.',
    workflow:
      'I use AI coding agents throughout development, from exploring codebases and planning changes to implementation, code review, and QA. I make the technical decisions and verify changes before shipping.',
  },
  de: {
    eyebrow: 'Portfolio',
    jobTitle: 'Senior Full Stack Software Engineer',
    contact: 'Kontakt aufnehmen',
    description:
      'Ich verantworte komplexe Funktionen über ihren gesamten Lebenszyklus, von der Klärung der Anforderungen und dem Architekturentwurf bis zum Produktivbetrieb und zur Weiterentwicklung. Bei headwire.com, Inc. habe ich für die Kontoverwaltung einer Golf-Medienplattform die Frontend-Architektur und die Backend-Integrationen verantwortet. Ich arbeite seit über zehn Jahren in der Softwareentwicklung und habe Teams mit bis zu zehn Personen geleitet.',
    workflow:
      'Ich setze KI-Coding-Agenten in der Softwareentwicklung ein, um Codebasen zu analysieren, Änderungen zu planen und umzusetzen sowie Reviews und Tests vorzubereiten. Ich treffe die technischen Entscheidungen und prüfe Änderungen vor der Veröffentlichung.',
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    jobTitle: string;
    contact: string;
    description: string;
    workflow: string;
  }
>;

interface AboutMeSectionProps {
  id: string;
  locale: Locale;
  portraitSrc: string;
}

export default function AboutMeSection({
  id,
  locale,
  portraitSrc,
}: AboutMeSectionProps) {
  const text = copy[locale];
  return (
    <section id={id} className={styles.intro}>
      <div className={styles.introCopy}>
        <p className="eyebrow">{text.eyebrow}</p>
        <h1>Felix Staud</h1>
        <p className={styles.role}>{text.jobTitle}</p>
        <p className={styles.description}>{text.description}</p>
        <p className={styles.description}>{text.workflow}</p>
        <div className={styles.introLinks}>
          <a className={styles.contactButton} href={contactHref}>
            {text.contact}
          </a>
          <a href="https://github.com/flx-sta">GitHub</a>
          <a href="https://www.linkedin.com/in/felix-s-28188719a/">LinkedIn</a>
        </div>
      </div>
      <div className={styles.portrait}>
        <img src={portraitSrc} alt="" width="2400" height="1600" />
      </div>
    </section>
  );
}
