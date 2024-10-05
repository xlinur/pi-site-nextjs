import { Suspense } from 'react';
import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHeroVacancies from '@/app/components/Sections/SectionHeroVacancies';
import { CVFormWrapper } from '@/app/components/CVForm/CVFormWrapper';
import Content from './Content';

import styles from './styles.module.scss';

const PAGE_DATA_REQUEST_PATH = '';

// TODO: strapi integration needed
export const generateMetadata = async () => {
  return createMetadataFromSeo({});
};

export default async function PageVacancies() {
  return (
    <PageTemplate>
      <main className={styles.page}>
        <div className="container">
          <SectionHeroVacancies />
        </div>

        <div className="container">
          <Suspense fallback={null}>
            <Content pageData={{}} />
          </Suspense>
        </div>

        <div className="container">
          <CVFormWrapper />
        </div>
      </main>
    </PageTemplate>
  );
}
