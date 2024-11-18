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
import fetchWrapper from '@/app/utils/fetchWrapper';

const PAGE_DATA_REQUEST_PATH = '/api/page-consulting?populate=deep';

export const dynamic = 'force-dynamic';

export const generateMetadata = async () => {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function Consulting() {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  const {
    AnimatedHero,
    ConsultingServices,
    WhyInfoSection,
    ExamplesOfBestPractices,
  } = data.data.attributes;

  return (
    <PageTemplate>
      <main className={styles.relocationHelpPage}>
        <div className={styles.customGapHero}>
          <SectionHero {...AnimatedHero} />

          <div className="container">
            <SectionConsultingServices {...ConsultingServices} />
          </div>
        </div>

        <div className={styles.sectionWhyWrapper}>
          <div className="container">
            <SectionWhyInfo {...WhyInfoSection} />
          </div>
        </div>

        <div className="container">
          <SectionExamplesOfBestPractices {...ExamplesOfBestPractices} />
        </div>

        <SectionFeedbackList
          firstSlideTheme="white"
          sectionClass={styles.sectionFeedbackWrapper}
        />

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
