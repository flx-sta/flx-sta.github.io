import type { Locale } from '../i18n';
import SectionWrapper from './SectionWrapper';
import styles from './ExperienceSection.module.css';

const roles = [
  { key: 'headwire', company: 'headwire.com, Inc.' },
  { key: 'accenture', company: 'Accenture' },
  { key: 'metaproc', company: 'meta:proc' },
] as const;
const copy = {
  en: {
    title: 'Experience',
    headwire: {
      title: 'Senior Software Engineer',
      period: 'Jan 2024 – Present',
      description:
        'Built account management features for a golf media platform, including saved articles and sign-in flows. I owned frontend architecture and backend integrations and improved how asynchronous jobs recover from failures with AWS SQS retries and dead-letter queues.',
    },
    accenture: {
      title: 'Senior Software Engineer / Team Lead',
      period: 'Jul 2022 – Dec 2023',
      description:
        'Led technical delivery across three enterprise projects with teams of up to ten engineers. I designed backend services and API integrations and cut JavaScript build time from 30 seconds to 3 seconds with esbuild.',
    },
    metaproc: {
      title: 'Head of Frontend / Full Stack Developer',
      period: 'Jul 2018 – Jun 2022',
      description:
        'Led a frontend team and built dashboards, data visualizations, and automation workflows with React, TypeScript, and Electron. I also helped modernize the Java and Node.js services behind the product.',
    },
  },
  de: {
    title: 'Berufserfahrung',
    headwire: {
      title: 'Senior Software Engineer',
      period: 'Jan. 2024 – heute',
      description:
        'Für eine Golf-Medienplattform habe ich Kontofunktionen wie gespeicherte Artikel und die Anmeldung entwickelt. Ich verantwortete die Frontend-Architektur sowie die Backend-Integrationen und verbesserte mit Wiederholungsversuchen und Dead-Letter-Queues in AWS SQS die Fehlerbehandlung asynchroner Jobs.',
    },
    accenture: {
      title: 'Senior Software Engineer / Team Lead',
      period: 'Juli 2022 – Dez. 2023',
      description:
        'Ich leitete die technische Umsetzung von drei Unternehmensprojekten mit Teams von bis zu zehn Entwicklern. Ich entwarf Backend-Dienste und API-Integrationen und verkürzte mit esbuild die JavaScript-Build-Zeit von 30 auf 3 Sekunden.',
    },
    metaproc: {
      title: 'Head of Frontend / Full Stack Developer',
      period: 'Juli 2018 – Juni 2022',
      description:
        'Ich leitete ein Frontend-Team und entwickelte Dashboards, Datenvisualisierungen und Automatisierungsabläufe mit React, TypeScript und Electron. Außerdem half ich, die Java- und Node.js-Dienste der Plattform zu modernisieren.',
    },
  },
} satisfies Record<
  Locale,
  { title: string } & Record<
    (typeof roles)[number]['key'],
    { title: string; period: string; description: string }
  >
>;

export default function ExperienceSection({
  id,
  locale,
}: {
  id: string;
  locale: Locale;
}) {
  const text = copy[locale];
  return (
    <SectionWrapper id={id} title={text.title}>
      <ol className={styles.roles}>
        {roles.map((role) => {
          const item = text[role.key];
          return (
            <li key={role.company} className={styles.role}>
              <div>
                <p className={styles.company}>{role.company}</p>
                <p className={styles.period}>{item.period}</p>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p className={styles.roleDescription}>{item.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </SectionWrapper>
  );
}
