'use client';
import Button from '@/app/components/Button';
import Pagination from '@/app/components/Pagination';
import SkeletonCard from '@/app/components/Skeletons/Card';

import { useVacanciesContext } from '../Context';
import CardVacancy from './CardVacancy';
import FilterBool from './FilterBool';
import FilterList from './FilterList';
// import FilterGroupList from './FilterGroupList';

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
              {filters.map((filter) => {
                switch (filter.type) {
                  case 'list':
                    return (
                      <FilterList
                        key={filter.id}
                        title={filter.title}
                        values={selectedFilters[filter.id]}
                        options={filter.values}
                        onChange={onFilterChange(filter.id)}
                        noFilterText={filterNoResults}
                      />
                    );
                  // case 'group-list':
                  //   return <FilterGroupList key={filter.id} {...filter} />;
                  case 'boolean':
                    return (
                      <FilterBool
                        key={filter.id}
                        title={filter.title}
                        checked={selectedFilters[filter.id]}
                        onChange={onFilterChange(filter.id)}
                      />
                    );

                  default:
                    return null;
                }
              })}

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
              {vacancies.data.map((item) => (
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
