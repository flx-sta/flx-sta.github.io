import type { ReactNode } from 'react';
import styles from './SectionWrapper.module.css';

interface SectionWrapperProps {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
}

export default function SectionWrapper({
  id,
  title,
  eyebrow,
  description,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={styles.contentSection}>
      <header className={styles.sectionHeading}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {description && (
          <p className={styles.sectionDescription}>{description}</p>
        )}
      </header>
      {children}
    </section>
  );
}
