'use client';
import Button from '@/app/components/Button';
import Pagination from '@/app/components/Pagination';
import SkeletonCard from '@/app/components/Skeletons/Card';

import { useVacanciesContext } from '../Context';
import CardVacancy from './CardVacancy';
// import FilterBool from './FilterBool';
// import FilterGroupList from './FilterGroupList';
import FilterList from './FilterList';

import styles from './styles.module.scss';

const ResultsList = ({ pageData }) => {
  const {
    contentTitle,
    itemsCountLabel,
    filterFindBtn,
    filterResetBtn,
    filterNoResults,
  } = pageData;

  const {
    vacancies,
    filters,
    setFilter,
    selectedFilters,
    currentPage,
    resetFilters,
    applyFilters,
    isLoadingFilters,
    isLoadingVacancies,
    setCurrentPage,
  } = useVacanciesContext();

  const onFilterChange = (id) => (value) => {
    setFilter(id, value);
  };

  const filtersSectios = Object.entries(filters).map(([key, options]) => ({
    id: key,
    title: 'No TITLE FOUND',
    options,
  }));

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
          {isLoadingFilters ? (
            <>
              {Array.from(Array(2)).map((_, idx) => (
                <SkeletonCard className={styles.skeletonFilter} key={idx} />
              ))}
            </>
          ) : (
            <>
              {filtersSectios.map((filter) => (
                <FilterList
                  key={filter.id}
                  title={filter.title}
                  values={selectedFilters[filter.id]}
                  options={filter.options}
                  onChange={onFilterChange(filter.id)}
                  noFilterText={filterNoResults}
                />
              ))}

              <div className={styles.filterActions}>
                <Button
                  size="sm"
                  name={filterFindBtn.name}
                  onClick={applyFilters}
                />
                <Button
                  size="sm"
                  name={filterResetBtn.name}
                  onClick={resetFilters}
                />
              </div>
            </>
          )}
        </div>

        <div className={styles.vacanciesList}>
          {isLoadingVacancies ? (
            <>
              {Array.from(Array(4)).map((_, idx) => (
                <SkeletonCard addButton key={idx} />
              ))}
            </>
          ) : (
            <>
              {vacancies.vacancies.map((item) => (
                <CardVacancy key={item.id} {...item} />
              ))}

              <Pagination
                page={currentPage}
                totalCount={vacancies.totalPages}
                onChange={setCurrentPage}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResultsList;
