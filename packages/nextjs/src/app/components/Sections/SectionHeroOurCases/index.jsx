import Markdown from 'react-markdown';
import Button from '@/app/components/Button';

import styles from './styles.module.scss';

export default async function index({
  title,
  subtitle,
  items,
  description,
  hireNowBtn,
  candidateBtn,
}) {
  return (
    <section className={styles.firstSection}>
      <header>
        <h1>
          <Markdown>{title}</Markdown>
        </h1>
        <Markdown>{subtitle}</Markdown>
      </header>

      <div className={styles.firstSectionGrid}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.firstSectionItem}>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <div className={styles.firstSectionFooter}>
        <div className={styles.content}>
          <Markdown>{description}</Markdown>
        </div>

        <div className={styles.actions}>
          <Button withIcon name={hireNowBtn.name} />
          <Button theme="secondary" name={candidateBtn.name} />
        </div>
      </div>
    </section>
  );
}