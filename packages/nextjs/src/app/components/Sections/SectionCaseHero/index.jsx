import clsx from 'clsx';
import styles from './styles.module.scss';
import Markdown from 'react-markdown';

export default function SectionCaseHero({ title, subtitle, description }) {
  return (
    <section className={styles.sectionCaseHero}>
      <header>
        <Markdown>{title}</Markdown>
        <Markdown className={styles.subtitle}>{subtitle}</Markdown>
        <Markdown className={styles.description}>{description}</Markdown>
      </header>
    </section>
  );
}
