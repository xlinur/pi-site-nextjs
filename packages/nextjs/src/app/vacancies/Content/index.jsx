'use client';

import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import request from '@/app/utils/request';
import CardVacancy from '@/app/components/Cards/CardVacancy';

import styles from './styles.module.scss';

const Content = (pageData) => {
  const { contentTitle, itemsCountLabel, filterFindBtn, filterResetBtn } =
    pageData;

  const [vacancies, setVacancies] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await request.get('/api/vacancies');

      setVacancies(data);

      console.log({ data });
    };

    getData();
  }, []);

  return (
    <section className={styles.sectionWrapper}>
      <header>
        <h4>{contentTitle}</h4>

        <div className={styles.counter}>
          <span>{245}</span> {itemsCountLabel}
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
};

export default Content;
