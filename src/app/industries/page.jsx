import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';

import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionCustomVision from '@/app/components/Sections/SectionCustomVision';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import SectionKeySectors from '@/app/components/Sections/SectionKeySectors';

import pageIndustries from '@/app/api/strapi/pageIndustries/route';

import styles from './styles.module.scss';
import { routes } from '@/config/routes';

export const generateMetadata = async () => {
  const { SEO } = await pageIndustries();

  return createMetadataFromSeo(SEO);
};

export default async function PageIndustries() {
  const { AnimatedHero, SectorsGrid, TreeSection, SectionWithIndustriesImage } =
    await pageIndustries();

  return (
    <PageTemplate>
      <main className={styles.pageRecruitment}>
        <SectionHero {...AnimatedHero} />

        <div className="container">
          <SectionKeySectors {...SectorsGrid} />
        </div>

        <div className="container">
          <SectionHowWeWork {...TreeSection} />
        </div>

        <div className={styles.sectionCustomVisionWrapper}>
          <div className="container">
            <SectionCustomVision
              {...SectionWithIndustriesImage}
              rtl
              url={routes.cases()}
            />
          </div>
        </div>

        <SectionWeCanHelp />

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
