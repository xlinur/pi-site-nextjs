import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';

import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionConsultingServices from '@/app/components/Sections/SectionConsultingServices';
import SectionWhyInfo from '@/app/components/Sections/SectionWhyInfo';
import SectionExamplesOfBestPractices from '@/app/components/Sections/SectionExamplesOfBestPractices';

import styles from './styles.module.scss';

import request from '@/app/utils/request';

export const generateMetadata = async () => {
  const { data } = await request.get('/api/strapi/page/consulting');

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function Consulting() {
  const { data } = await request.get('/api/strapi/page/consulting');

  const {
    AnimatedHero,
    ConsultingServices,
    WhyInfoSection,
    ExamplesOfBestPractices,
  } = data.data.attributes;

  return (
    <PageTemplate>
      <main className={styles.relocationHelpPage}>
        <SectionHero {...AnimatedHero} />

        {/* @Component */}
        <div className="container">
          <SectionConsultingServices {...ConsultingServices} />
        </div>

        <div className={styles.sectionWhyWrapper}>
          <div className="container">
            <SectionWhyInfo {...WhyInfoSection} />
          </div>
        </div>

        <div className="container">
          <SectionExamplesOfBestPractices {...ExamplesOfBestPractices} />
        </div>

        <div className={styles.sectionFeedbackWrapper}>
          <SectionFeedbackList firstSlideTheme="white" />
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
