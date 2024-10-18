import Markdown from '@/app/components/Markdown';

import styles from './styles.module.scss';

export default function SectionCaseHero({ title, subtitle, description }) {
  return (
    <section className={styles.sectionCaseHero}>
      <header>
        <h1>
          <Markdown>{title}</Markdown>
        </h1>
        <Markdown className={styles.subtitle}>{subtitle}</Markdown>
        <Markdown className={styles.description}>{description}</Markdown>
      </header>
    </section>
  );
}
