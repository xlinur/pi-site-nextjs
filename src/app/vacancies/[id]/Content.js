'use client';

import { useCallback, useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import Image from 'next/image';
import Button from '@/app/components/Button';
import locationPinSVG from '@/app/assets/icons/location-pin.svg';
import fullTimeSVG from '@/app/assets/icons/full-time.svg';
import request from '@/app/utils/request';
import styles from './styles.module.scss';

export default function Content({ id, descriptionTitle, replyBtn }) {
  const [vacancyData, setVacancyData] = useState();

  const fetchData = useCallback(async () => {
    const data = await request.get(`/api/vacancies/${id}`);

    setVacancyData(data);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!vacancyData) return null;

  const { title, skills, location, type, description } = vacancyData;

  return (
    <div className="container">
      <section className={styles.sectionHeroVacancy}>
        <h2 className={styles.heroVacancyTitle}>{title}</h2>

        <ul className={styles.heroVacancyDetails}>
          <li className={styles.knowledge}>
            <span>{skills.join(', ')}</span>
          </li>

          <li>
            <Image
              src={locationPinSVG}
              alt="Location icon"
              width={24}
              height={24}
            />
            <div>{location}</div>
          </li>

          <li>
            <Image
              src={fullTimeSVG}
              alt="Full time icon"
              width={24}
              height={24}
            />
            <div>{type}</div>
          </li>
        </ul>

        <Button name={replyBtn.name} />
      </section>

      <section className={styles.sectionDescription}>
        <header>
          <h4>{descriptionTitle}</h4>
        </header>

        <div className={styles.content}>
          <Markdown>{description}</Markdown>
        </div>

        <Button name={replyBtn.name} />
      </section>
    </div>
  );
}
