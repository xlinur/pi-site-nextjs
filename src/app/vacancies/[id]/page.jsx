import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import { CVFormWrapper } from '@/app/components/CVForm/CVFormWrapper';
import fetchWrapper from '@/app/utils/fetchWrapper';
import Content from './Content';
import styles from './styles.module.scss';
import { Suspense } from 'react';

const PAGE_DATA_REQUEST_PATH = '/api/page-single-vacancy?populate=deep';

export const generateMetadata = async () => {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function PageVacancy({ params }) {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  const { descriptionTitle, replyBtn } = data.data.attributes;

  return (
    <PageTemplate>
      <main className={styles.page}>
        <Suspense fallback={null}>
          <Content
            id={params.id}
            descriptionTitle={descriptionTitle}
            replyBtn={replyBtn}
          />
        </Suspense>

        <div className="container">
          <CVFormWrapper />
        </div>
      </main>
    </PageTemplate>
  );
}
