import { Suspense } from 'react';
import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHeroVacancies from '@/app/components/Sections/SectionHeroVacancies';
import { CVFormWrapper } from '@/app/components/CVForm/CVFormWrapper';
import Content from './Content';
import fetchWrapper from '@/app/utils/fetchWrapper';
import styles from './styles.module.scss';

const PAGE_DATA_REQUEST_PATH = '/api/page-vacancies?populate=deep';

export const dynamic = 'force-dynamic';

export const generateMetadata = async () => {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function PageVacancies() {
  const [page, settingsData] = await Promise.all([
    fetchWrapper(PAGE_DATA_REQUEST_PATH),
    fetchWrapper('/api/global?populate=deep'),
  ]);

  const pageData = page.data.attributes;
  const { locale } = settingsData.data.attributes || {};

  return (
    <PageTemplate>
      <main className={styles.page}>
        <div className="container">
          <SectionHeroVacancies {...pageData} />
        </div>

        <div className="container">
          <Suspense fallback={null}>
            <Content pageData={pageData} locale={locale} />
          </Suspense>
        </div>

        <div className="container">
          <CVFormWrapper />
        </div>
      </main>
    </PageTemplate>
  );
}
