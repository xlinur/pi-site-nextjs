'use client';

import { useVacanciesContext } from '../Context';
import CardVacancy from './CardVacancy';
import FilterBool from './FilterBool';
import FilterList from './FilterList';

import styles from './styles.module.scss';

const ResultsList = ({ pageData }) => {
  const { contentTitle, itemsCountLabel, filterFindBtn, filterResetBtn } =
    pageData;

  const { vacancies, filters } = useVacanciesContext();

  return (
    <section className={styles.sectionWrapper}>
      <header>
        <h4>{contentTitle}</h4>

        <div className={styles.counter}>
          <span>{vacancies.totalCount}</span> {itemsCountLabel}
        </div>
      </header>

      <div className={styles.vacancies}>
        <div className={styles.vacanciesFilters}>
          {filters.map((filter) =>
            filter.type === 'list' ? (
              <FilterList key={filter.id} {...filter} />
            ) : (
              <FilterBool key={filter.id} {...filter} />
            ),
          )}
        </div>
        <div className={styles.vacanciesList}>
          {vacancies.data.map((item) => (
            <CardVacancy key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsList;
