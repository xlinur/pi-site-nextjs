import Markdown from 'react-markdown';
import Button from '@/app/components/Button';

import styles from './styles.module.scss';

export default function SectionHeroVacancies({
  title,
  description,
  hireNowBtn,
}) {
  return (
    <section className={styles.sectionHeroVacancies}>
      <header>
        <h1>
          <Markdown>{title}</Markdown>
        </h1>
        <div>
          <Markdown>{description}</Markdown>
        </div>
      </header>

      <Button withIcon name={hireNowBtn.name} />
    </section>
  );
}
