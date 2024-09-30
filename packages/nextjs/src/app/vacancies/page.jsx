import { Suspense } from 'react';
import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHeroVacancies from '@/app/components/Sections/SectionHeroVacancies';
import Content from './Content';

import styles from './styles.module.scss';

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
      </main>
    </PageTemplate>
  );
}
