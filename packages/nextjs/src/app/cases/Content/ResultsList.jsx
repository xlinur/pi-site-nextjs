'use client';

import Button from '@/app/components/Button';
import styles from '../styles.module.scss';
import CardCase from '../components/CardCase';
import { useCases } from './Context';

const Content = ({ spheresFilterTitle }) => {
  const { cases, loading, currentPage, changePage, applyFilter } = useCases();

  const {
    data,
    meta: { pagination },
  } = cases;

  if (loading) return <div>Loading...</div>;

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
            {data.map((item, idx) => (
              <CardCase key={idx} data={item} />
            ))}
          </div>

          <div className={styles.pagination}>
            <a href="#">&laquo;</a>

            <div className={styles.numbers}>
              {Array.from({
                length: pagination?.pageCount,
              }).map((_, idx) => (
                <a href="#" key={idx}>
                  {idx + 1}
                </a>
              ))}
            </div>

            <a href="#">&raquo;</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Content;
