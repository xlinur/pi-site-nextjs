import Markdown from 'react-markdown';
import Image from 'next/image';
import Button from '@/app/components/Button';
import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import { CVFormWrapper } from '@/app/components/CVForm/CVFormWrapper';
import locationPinSVG from '@/app/assets/icons/location-pin.svg';
import fullTimeSVG from '@/app/assets/icons/full-time.svg';
import request from '@/app/utils/request';
import styles from './styles.module.scss';

const PAGE_DATA_REQUEST_PATH = '';

export const generateMetadata = async () => {
  return createMetadataFromSeo({});
};

// TODO: strapi integration needed
export default async function PageVacancy({ params }) {
  const data = await request.get(`/api/vacancies/${params.id}`);
  const {
    title,
    knowledgeList,
    location,
    type,
    description,
    fullDescription,
    btnReplay,
  } = data;

  return (
    <PageTemplate>
      <main className={styles.page}>
        <div className="container">
          <section className={styles.sectionHeroVacancy}>
            <h2 className={styles.heroVacancyTitle}>{title}</h2>

            <ul className={styles.heroVacancyDetails}>
              <li className={styles.knowledge}>
                <span>{knowledgeList.join(', ')}</span>
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

            <Button name={btnReplay.name} />
          </section>

          <section className={styles.sectionDescription}>
            <header>
              <h4>Description</h4>
              <Markdown>{description}</Markdown>
            </header>

            <div className={styles.content}>
              <Markdown>{fullDescription}</Markdown>
            </div>

            <Button name={btnReplay.name} />
          </section>
        </div>

        <div className="container">
          <CVFormWrapper />
        </div>
      </main>
    </PageTemplate>
  );
}
