import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionWhyInfo from '@/app/components/Sections/SectionWhyInfo';
import SectionPricing from '@/app/components/Sections/SectionPricing';
import { SectionIndividualReportWrapper } from '@/app/components/Sections/SectionIndividualReport/SectionIndividualReportWrapper';
import SectionAnalyticsServices from '@/app/components/Sections/SectionAnalyticsServices';
import styles from './styles.module.scss';
import request from '@/app/utils/request';

const PAGE_DATA_REQUEST_PATH = '/api/strapi/page/analytics';

export const generateMetadata = async () => {
  const { data } = await request.get(PAGE_DATA_REQUEST_PATH);

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function Analytics() {
  const { data } = await request.get(PAGE_DATA_REQUEST_PATH);

  const { AnimatedHero, AnalyticsServices, WhyInfoSection, Pricing } =
    data.data.attributes;

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
          <SectionIndividualReportWrapper />
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
