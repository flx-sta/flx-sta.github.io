import type { Locale } from '../i18n';
import SectionWrapper from './SectionWrapper';
import styles from './SkillsSection.module.css';
const groups = [
  {
    key: 'frontend',
    skills: [
      'TypeScript',
      'React',
      'Lit',
      'Vue.js',
      'Adobe Experience Manager',
    ],
  },
  {
    key: 'backend',
    skills: [
      'Java',
      'Spring Boot',
      'Node.js',
      'REST',
      'OAuth 2.0',
      'PostgreSQL',
      'MongoDB',
    ],
  },
  {
    key: 'delivery',
    skills: ['AWS', 'Azure', 'Docker', 'Terraform', 'GitHub Actions'],
  },
  { key: 'quality', skills: ['JUnit', 'Jest', 'Scrum'] },
] as const;
const copy = {
  en: {
    title: 'Toolkit',
    frontend: 'Frontend & CMS',
    backend: 'Backend & data',
    delivery: 'Cloud & delivery',
    quality: 'Testing & collaboration',
  },
  de: {
    title: 'Technologien',
    frontend: 'Frontend & CMS',
    backend: 'Backend & Daten',
    delivery: 'Cloud & Bereitstellung',
    quality: 'Testen & Zusammenarbeit',
  },
} satisfies Record<Locale, Record<string, string>>;
export default function SkillsSection({
  id,
  locale,
}: {
  id: string;
  locale: Locale;
}) {
  const text = copy[locale];
  return (
    <SectionWrapper id={id} title={text.title}>
      <ul className={styles.toolkit}>
        {groups.map((group) => (
          <li key={group.key}>
            <h3>{text[group.key]}</h3>
            <p>{group.skills.join(', ')}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
