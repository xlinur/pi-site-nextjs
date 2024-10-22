import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionCustomVision from '@/app/components/Sections/SectionCustomVision';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import IndustriesWeWorkSection from '@/app/components/Sections/IndustriesWeWork';
import fetchWrapper from '@/app/utils/fetchWrapper';
import styles from './styles.module.scss';
import { routes } from '@/config/routes';

const PAGE_DATA_REQUEST_PATH = '/api/page-industries?populate=deep';

export const generateMetadata = async () => {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function PageIndustries() {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  const {
    AnimatedHero,
    IndustriesWeWork,
    TreeSection,
    SectionWithIndustriesImage,
  } = data.data.attributes;

  return (
    <PageTemplate>
      <main className={styles.pageRecruitment}>
        <SectionHero {...AnimatedHero} />

        <div className="container">
          <IndustriesWeWorkSection {...IndustriesWeWork} />
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
