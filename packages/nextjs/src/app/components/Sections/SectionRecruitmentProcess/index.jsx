import Button from '@/app/components/Button';
import styles from './styles.module.scss';
import Markdown from 'react-markdown';

const SectionRecruitmentProcess = ({
  title,
  description,
  findTalentsBtn,
  processes,
}) => {
  return (
    <section className={styles.sectionRecruitmentProcess}>
      <header>
        <h3>{title}</h3>
        <p>{description}</p>
      </header>

      <div className={styles.steps}>
        {processes?.map(({ title, text }, idx) => (
          <div className={styles.stepsItem} key={idx}>
            <h5 className={styles.stepsItemTitle}>{title}</h5>

            <div className={styles.stepsItemText}>
              <Markdown>{text}</Markdown>
            </div>
          </div>
        ))}
      </div>

      <Button>{findTalentsBtn}</Button>
    </section>
  );
};

export default SectionRecruitmentProcess;
