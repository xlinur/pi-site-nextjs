import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import SectionInfoWithCards from '@/app/components/Sections/SectionInfoWithCards';
import SectionCustomVision from '@/app/components/Sections/SectionCustomVision';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionCompaniesLogo from '@/app/components/Sections/SectionCompaniesLogo';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import SectionTypesOfRecruitment from '@/app/components/Sections/SectionTypesOfRecruitment';
import SectionNeedHelpSection from '@/app/components/Sections/SectionNeedHelpSection';
import SectionPricing from '@/app/components/Sections/SectionPricing';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import pageExecutiveSearch from '@/app/api/strapi/pageExecutiveSearch/route';

import styles from './styles.module.scss';

export const generateMetadata = async () => {
  const { SEO } = await pageExecutiveSearch();

  return createMetadataFromSeo(SEO);
};

export default async function ExecutiveSearchPage() {
  const {
    AnimatedHero,
    InfoWithCards,
    TreeSection,
    TypesOfRecruitment,
    NeedHelpSection,
    SectionWithIndustriesImage,
    Pricing,
  } = await pageExecutiveSearch();

  return (
    <PageTemplate>
      <main>
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

        <div className={styles.sectionFeedbackWrapper}>
          <SectionFeedbackList firstSlideTheme="white" />
        </div>

        <SectionCompaniesLogo />

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