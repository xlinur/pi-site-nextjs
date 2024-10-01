'use client';

import Button from '@/app/components/Button';
import { getCasesRoute } from '@/app/api/strapi/pageCases/route';
import styles from '../styles.module.scss';
import CardCase from '../components/CardCase';
import { useCases } from './Context';
import { useEffect } from 'react';

const Content = ({ spheresFilterTitle }) => {
  const {
    casesFilters,
    updateCaseFilter,
    page,
    updatePage,
    casesData,
    loading,
  } = useCases();

  if (loading) return <div>Loading...</div>;

  const numberOfPages = casesData?.meta?.pagination?.pageCount || 0;

  return (
    <>
      <div className="container">
        <section className={styles.sectionCasesNav}>
          <div className={styles.casesNavItem}>
            <h5>{spheresFilterTitle}</h5>

            <div className={styles.casesNavItemList}>
              <Button theme="secondary" name="NET" />
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <section className={styles.sectionListLink}>
          <div className={styles.list}>
            {casesData?.data?.map((item, idx) => (
              <CardCase key={idx} data={item} />
            ))}
          </div>

          {numberOfPages > 1 && (
            <div className={styles.pagination}>
              <a href="#">&laquo;</a>

              <div className={styles.numbers}>
                {Array.from({
                  length: numberOfPages,
                }).map((_, idx) => (
                  <a
                    href="#"
                    key={idx}
                    className={
                      casesData?.meta?.pagination?.page === page && 'active'
                    }
                  >
                    {idx + 1}
                  </a>
                ))}
              </div>

              <a href="#">&raquo;</a>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Content;
