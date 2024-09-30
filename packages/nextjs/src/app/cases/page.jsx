import styles from './styles.module.scss';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionHeroOurCases from '@/app/components/Sections/SectionHeroOurCases';
import PageTemplate from '@/app/components/PageTemplate';
import pageCase from '@/app/api/strapi/pageCase/route';
import ResultsList from './ResultsList';
import { Suspense } from 'react';

export default async function PageCases() {
  const { HeroOurCasesSection, spheresFilterTitle } = await pageCase();

  return (
    <PageTemplate>
      <main className={styles.page}>
        <div className="container">
          <SectionHeroOurCases {...HeroOurCasesSection} />
        </div>

        <Suspense fallback={null}>
          <ResultsList spheresFilterTitle={spheresFilterTitle} />
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
