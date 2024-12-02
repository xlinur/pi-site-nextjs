import Markdown from '@/app/components/Markdown';
import OpenModalFormButton from '@/app/components/OpenModalFormButton';
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

      <OpenModalFormButton withIcon name={hireNowBtn.name} />
    </section>
  );
}
