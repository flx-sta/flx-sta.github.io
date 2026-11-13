import styles from './ProjectCard.module.css';

const linkIconPaths = {
  github:
    'M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5',
  pullRequest:
    'M6 8v8m2-10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2-2v-5a5 5 0 0 0-5-5h-1m2-2-2 2 2 2',
  website:
    'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18m-9-9c4 5 4 13 0 18-4-5-4-13 0-18Z',
};

interface ProjectCardProps {
  title: string;
  description: string;
  tagsLabel: string;
  tags: readonly string[];
  contributionsLabel: string;
  /** Featured changes shown with context and a direct link to each pull request. */
  contributions: readonly {
    title: string;
    description: string;
    number: number;
    url: string;
  }[];
  /** Project destinations displayed in the card footer. */
  links: readonly {
    label: string;
    url: string;
    icon: keyof typeof linkIconPaths;
  }[];
}

export default function ProjectCard({
  title,
  description,
  tagsLabel,
  tags,
  contributionsLabel,
  contributions,
  links,
}: ProjectCardProps) {
  return (
    <article className={styles.projectCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className={styles.tags} aria-label={tagsLabel}>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className={styles.contributions}>
        <h4>{contributionsLabel}</h4>
        <ul>
          {contributions.map((contribution) => (
            <li key={contribution.number}>
              <div className={styles.contributionHeading}>
                <strong>{contribution.title}</strong>
                <a
                  href={contribution.url}
                  aria-label={`PR #${contribution.number}: ${contribution.title}`}
                >
                  PR #{contribution.number} <span aria-hidden="true">↗</span>
                </a>
              </div>
              <p>{contribution.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.projectLinks}>
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            aria-label={`${link.label}: ${title}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d={linkIconPaths[link.icon]} />
            </svg>
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
