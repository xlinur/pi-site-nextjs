import styles from './styles.module.scss';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionHeroOurCases from '@/app/components/Sections/SectionHeroOurCases';
import PageTemplate from '@/app/components/PageTemplate';
import request from '@/app/utils/request';
import Content from './Content';
import { Suspense } from 'react';

export default async function PageCases() {
  const { data } = await request.get('/api/strapi/page/cases');

  const { HeroOurCasesSection, spheresFilterTitle } = data.data.attributes;

  return (
    <PageTemplate>
      {console.log('page', data)}
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
