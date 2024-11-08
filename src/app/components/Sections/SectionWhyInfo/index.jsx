import clsx from 'clsx';
import Markdown from '@/app/components/Markdown';
import styles from './styles.module.scss';
import OpenModalFormButton from '@/app/components/OpenModalFormButton';

export default async function SectionWhyInfo({
  withBackground,
  title,
  reasons,
  findTalentBtn,
}) {
  return (
    <section
      className={clsx(
        withBackground && styles.withBackground,
        styles.sectionWhy,
      )}
    >
      <h2>{title}</h2>

      <div className={styles.reasons}>
        {reasons?.map(({ title, description }) => (
          <div className={styles.reasonsItem} key={title}>
            <h5 className={styles.reasonsItemTitle}>{title}</h5>
            <Markdown className={styles.reasonsItemText}>
              {description}
            </Markdown>
          </div>
        ))}
        <div className={styles.reasonsItem}>
          <div className={styles.reasonsItemTitle}></div>
          <div className={styles.reasonsItemText}>
            <OpenModalFormButton name={findTalentBtn.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
