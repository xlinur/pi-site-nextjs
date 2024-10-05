import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionCustomVision from '@/app/components/Sections/SectionCustomVision';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import SectionInfoWithCards from '@/app/components/Sections/SectionInfoWithCards';
import SectionTypesOfRecruitment from '@/app/components/Sections/SectionTypesOfRecruitment';
import SectionNeedHelpSection from '@/app/components/Sections/SectionNeedHelpSection';
import SectionPricing from '@/app/components/Sections/SectionPricing';
import request from '@/app/utils/request';
import styles from './styles.module.scss';

export const generateMetadata = async () => {
  const { data } = await request.get('/api/strapi/page/recruitment');

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function PageRecruitment() {
  const { data } = await request.get('/api/strapi/page/recruitment');

  const {
    AnimatedHero,
    InfoWithCards,
    TreeSection,
    TypesOfRecruitment,
    NeedHelpSection,
    Pricing,
    SectionWithIndustriesImage,
  } = data.data.attributes;

  return (
    <PageTemplate>
      <main className={styles.pageRecruitment}>
        <SectionHero {...AnimatedHero} />

        <div className="container">
          <SectionInfoWithCards {...InfoWithCards} />
        </div>

        <div className="container">
          <SectionHowWeWork {...TreeSection} />
        </div>

        <div className="container">
          <SectionTypesOfRecruitment {...TypesOfRecruitment} />
        </div>

        <SectionNeedHelpSection {...NeedHelpSection} />

        <div className="container">
          <SectionPricing {...Pricing} />
        </div>

        <div className={styles.sectionCustomVisionWrapper}>
          <div className="container">
            <SectionCustomVision {...SectionWithIndustriesImage} />
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
