'use client';

import Button from '@/app/components/Button';
import Pagination from '@/app/components/Pagination';
import CardCase from '../components/CardCase';

import { useCases } from './Context';
import styles from '../styles.module.scss';
import SkeletonCard from '@/app/components/Skeletons/Card';
import SkeletonButton from '@/app/components/Skeletons/Button';

const Content = ({ spheresFilterTitle, settingsData }) => {
  const {
    cases,
    loading,
    currentPage,
    changePage,
    applyFilter,
    filter,
    resetFilter,
    spheres,
  } = useCases();

  const { locale } = settingsData.data.attributes;

  const {
    data,
    meta: { pagination },
  } = cases;

  const onSphereFilterClick = (key) => () => {
    if (filter.sphere === key) {
      resetFilter('sphere');
    } else {
      applyFilter('sphere', key);
    }
  };

  const sphereFilterOptions = spheres.map((item) => {
    const { name, slug } = item?.attributes || {};

    return {
      name,
      key: slug,
    };
  });

  if (loading)
    return (
      <>
        <div className="container">
          <section className={styles.sectionCasesNav}>
            <div className={styles.casesNavItem}>
              <div className={styles.casesNavItemList}>
                {Array.from(Array(2)).map((_, idx) => (
                  <SkeletonButton key={idx} />
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <section className={styles.sectionListLink}>
            <div className={styles.list}>
              {Array.from(Array(3)).map((_, idx) => (
                <SkeletonCard
                  addExtraContent
                  addButton
                  className={styles.skeletonCard}
                  key={idx}
                />
              ))}
            </div>
          </section>
        </div>
      </>
    );

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
              <CardCase key={idx} data={item} locale={locale} />
            ))}
          </div>

          <Pagination
            page={currentPage}
            totalCount={pagination?.pageCount}
            onChange={changePage}
          />
        </section>
      </div>
    </>
  );
};

export default Content;
