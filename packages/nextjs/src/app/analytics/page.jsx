import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionWhyInfo from '@/app/components/Sections/SectionWhyInfo';
import SectionPricing from '@/app/components/Sections/SectionPricing';
import SectionIndividualReport from '@/app/components/Sections/SectionIndividualReport';
import SectionAnalyticsServices from '@/app/components/Sections/SectionAnalyticsServices';

import styles from './styles.module.scss';

import pageAnalytics from '@/app/api/strapi/pageAnalytics/route';

export const generateMetadata = async () => {
  const { SEO } = await pageAnalytics();

  return createMetadataFromSeo(SEO);
};

export default async function SpheresPage() {
  const { AnimatedHero, AnalyticsServices, WhyInfoSection, Pricing } =
    await pageAnalytics();

  return (
    <PageTemplate>
      <main>
        <SectionHero {...AnimatedHero} />

        <div className="container">
          <SectionAnalyticsServices {...AnalyticsServices} />
        </div>

        <div className="container">
          <SectionWhyInfo {...WhyInfoSection} />
        </div>

        <div className="container">
          <SectionPricing {...Pricing} />
        </div>

        <div className={styles.sectionFeedbackWrapper}>
          <SectionFeedbackList firstSlideTheme="white" />
        </div>

        <div className="container">
          <SectionIndividualReport />
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
