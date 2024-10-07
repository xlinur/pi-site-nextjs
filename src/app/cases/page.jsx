import { Suspense } from 'react';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionHeroOurCases from '@/app/components/Sections/SectionHeroOurCases';
import PageTemplate from '@/app/components/PageTemplate';
import { createMetadataFromSeo } from '@/app/utils/metadata';
import fetchWrapper from '@/app/utils/fetchWrapper';
import Content from './Content';
import styles from './styles.module.scss';

const PAGE_DATA_REQUEST_PATH = '/api/page-case?populate=deep';

export const generateMetadata = async () => {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function PageCases() {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  const { HeroOurCasesSection, spheresFilterTitle } = data.data.attributes;

  return (
    <PageTemplate>
      <main className={styles.page}>
        <div className="container">
          <SectionHeroOurCases {...HeroOurCasesSection} />
        </div>

        <Suspense fallback={null}>
          <Content spheresFilterTitle={spheresFilterTitle} />
        </Suspense>

        <div className={styles.sectionFormWrapper}>
          <div className="container">
            <section className={styles.sectionForm}>
              <ContactFormWrapper />
            </section>
          </div>
        </div>
      </main>
    </PageTemplate>
  );
}
