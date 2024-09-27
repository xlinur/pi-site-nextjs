import Markdown from 'react-markdown';
import CardVacancy from '@/app/components/Cards/CardVacancy';

import styles from './styles.module.scss';

export default function index() {
  return (
    <section className={styles.sectionWrapper}>
      <header>
        <h4>Find your vacancy</h4>

        <div className={styles.counter}>
          <span>{245}</span> vacancies found
        </div>
      </header>

      <div className={styles.vacancies}>
        <div className={styles.vacanciesFilters}></div>
        <div className={styles.vacanciesList}>
          {Array.from(Array(5)).map((_, idx) => (
            <CardVacancy key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
