'use client';

import Button from '@/app/components/Button';
import styles from '../styles.module.scss';
import CardCase from '../components/CardCase';
import { useCases } from './Context';

const Content = ({ spheresFilterTitle }) => {
  const {
    cases,
    loading,
    currentPage,
    changePage,
    applyFilter,
    filter,
    resetFilter,
  } = useCases();

  const {
    data,
    meta: { pagination },
  } = cases;

  const disableNextPaginationBtn = currentPage === pagination?.pageCount;
  const disablePrevPaginationBtn = currentPage === 1;

  const onPageNumberChange = (number) => () => {
    changePage(number);
  };

  const onNextPageClick = () => {
    if (!disableNextPaginationBtn) changePage(currentPage + 1);
  };

  const onPrevPageClick = () => {
    if (!disablePrevPaginationBtn) changePage(currentPage - 1);
  };

  const onSphereFilterClick = (key) => () => {
    if (filter.sphere === key) {
      resetFilter('sphere');
    } else {
      applyFilter('sphere', key);
    }
  };

  const sphereFilterOptions = cases?.data?.reduce((acc, item) => {
    const { name, slug } = item.attributes.sphere?.data?.attributes || {};

    if (name && slug && !acc.find((i) => i.key === slug)) {
      acc.push({
        name,
        key: slug,
      });
    }

    return acc;
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="container">
        <section className={styles.sectionCasesNav}>
          <div className={styles.casesNavItem}>
            <h5>{spheresFilterTitle}</h5>

            <div className={styles.casesNavItemList}>
              {sphereFilterOptions.map(({ key, name }) => (
                <Button
                  key={key}
                  theme={filter.sphere === key ? 'primary' : 'secondary'}
                  name={name}
                  onClick={onSphereFilterClick(key)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <section className={styles.sectionListLink}>
          <div className={styles.list}>
            {data.map((item, idx) => (
              <CardCase key={idx} data={item} />
            ))}
          </div>

          {pagination?.pageCount > 1 && (
            <div className={styles.pagination}>
              <button
                disabled={disablePrevPaginationBtn}
                onClick={onPrevPageClick}
              >
                &laquo;
              </button>

              <div className={styles.numbers}>
                {Array.from({
                  length: pagination?.pageCount,
                }).map((_, idx) => (
                  <button key={idx} onClick={onPageNumberChange(idx + 1)}>
                    {idx + 1}
                  </button>
                ))}
              </div>

              <button
                disabled={disableNextPaginationBtn}
                onClick={onNextPageClick}
              >
                &raquo;
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Content;