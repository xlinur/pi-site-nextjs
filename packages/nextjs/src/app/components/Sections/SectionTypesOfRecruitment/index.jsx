import Markdown from 'react-markdown';
import Button from '@/app/components/Button';

import styles from './styles.module.scss';

export default async function SectionTypesOfRecruitment(props) {
  const { title, types } = props;

  return (
    <section className={styles.typeOfRecruitment}>
      <header>
        <h3>{title}</h3>
      </header>

      <div className={styles.typeOfRecruitmentItems}>
        {types.map((item, idx) => (
          <div className={styles.gridItem} key={idx}>
            <div className={styles.gridItemHeader}>
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>

            <div className={styles.gridItemContent}>
              <div>
                <Markdown>{item.description}</Markdown>
              </div>

              <Button name={item.hireNowBtn.name} openModal />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
