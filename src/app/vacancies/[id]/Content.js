'use client';

import Markdown from '@/app/components/Markdown';
import Image from 'next/image';
import Button from '@/app/components/Button';
import locationPinSVG from '@/app/assets/icons/location-pin.svg';
import fullTimeSVG from '@/app/assets/icons/full-time.svg';
import OpenModalFormButton from '@/app/components/OpenModalFormButton';
import styles from './styles.module.scss';

export default function Content({ data, descriptionTitle, replyBtn }) {
  const { title, skills, location, type, description } = data;

  return (
    <div className="container">
      <section className={styles.sectionHeroVacancy}>
        <h2 className={styles.heroVacancyTitle}>{title}</h2>

        <ul className={styles.heroVacancyDetails}>
          <li className={styles.knowledge}>
            <span>{skills?.join(', ')}</span>
          </li>

          {location && (
            <li>
              <Image
                src={locationPinSVG}
                alt="Location icon"
                width={24}
                height={24}
              />
              <div>{location?.join(', ')}</div>
            </li>
          )}

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

        <OpenModalFormButton name={replyBtn.name} />
      </section>

      <section className={styles.sectionDescription}>
        <header>
          <h4>{descriptionTitle}</h4>
        </header>

        <div className={styles.content}>
          <Markdown>{description}</Markdown>
        </div>

        <OpenModalFormButton name={replyBtn.name} />
      </section>
    </div>
  );
}
