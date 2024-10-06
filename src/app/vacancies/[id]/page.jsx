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

const PAGE_DATA_REQUEST_PATH = '/api/strapi/page/vacancy';

export const generateMetadata = async () => {
  const { data } = await request.get(PAGE_DATA_REQUEST_PATH);

  return createMetadataFromSeo(data.data.attributes.SEO);
};

// TODO: strapi integration needed
export default async function PageVacancy({ params }) {
  const { data: pageData } = await request.get(PAGE_DATA_REQUEST_PATH);
  const vacancyData = await request.get(`/api/vacancies/${params.id}`);

  const { descriptionTitle, replyBtn } = pageData.data.attributes;

  const { title, skills, location, type, description } = vacancyData;

  return (
    <PageTemplate>
      <main className={styles.page}>
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

        <div className="container">
          <CVFormWrapper />
        </div>
      </main>
    </PageTemplate>
  );
}
