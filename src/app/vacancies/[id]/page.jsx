import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import { CVFormWrapper } from '@/app/components/CVForm/CVFormWrapper';
import fetchWrapper from '@/app/utils/fetchWrapper';
import vacanciesFetchWrapper from '@/app/utils/vacanciesFetchWrapper';
import Content from './Content';
import styles from './styles.module.scss';

const PAGE_DATA_REQUEST_PATH = '/api/page-single-vacancy?populate=deep';

export const generateMetadata = async () => {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function PageVacancy({ params }) {
  const [pageData, vacancyData] = await Promise.all([
    fetchWrapper(PAGE_DATA_REQUEST_PATH),
    vacanciesFetchWrapper(`/vacancies/${params.id}`),
  ]);

  const { descriptionTitle, replyBtn } = pageData.data.attributes;

  return (
    <PageTemplate>
      <main className={styles.page}>
        <Content
          descriptionTitle={descriptionTitle}
          replyBtn={replyBtn}
          data={vacancyData}
        />

        <div className="container">
          <CVFormWrapper />
        </div>
      </main>
    </PageTemplate>
  );
}
