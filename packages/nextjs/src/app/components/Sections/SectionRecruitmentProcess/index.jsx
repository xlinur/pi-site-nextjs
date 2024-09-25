import Button from '@/app/components/Button';
import styles from './styles.module.scss';
import Markdown from 'react-markdown';

const SectionRecruitmentProcess = ({
  title,
  description,
  findTalentBtn,
  processes,
}) => {
  return (
    <section className={styles.sectionRecruitmentProcess}>
      <header>
        <h3>{title}</h3>
        <p>{description}</p>
      </header>

      <div className={styles.steps}>
        {processes?.map(({ id, title, description }) => (
          <div className={styles.stepsItem} key={id}>
            <h5 className={styles.stepsItemTitle}>{title}</h5>

            <div className={styles.stepsItemText}>
              <Markdown>{description}</Markdown>
            </div>
          </div>
        ))}
      </div>

      <Button name={findTalentBtn.name} />
    </section>
  );
};

export default SectionRecruitmentProcess;
