import styles from './ProjectCard.module.css';
interface ProjectCardProps {
  title: string;
  description: string;
  tagsLabel: string;
  tags: readonly string[];
  links: readonly { label: string; url: string }[];
}
export default function ProjectCard({
  title,
  description,
  tagsLabel,
  tags,
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
      <div className={styles.projectLinks}>
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            aria-label={`${link.label}: ${title}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
