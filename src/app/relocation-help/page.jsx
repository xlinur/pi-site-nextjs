import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionRelocationHelpHero from '@/app/components/Sections/SectionRelocationHelpHero';
import SectionBlockStepsPlan from '@/app/components/Sections/SectionBlockStepsPlan';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import fetchWrapper from '@/app/utils/fetchWrapper';
import styles from './styles.module.scss';

const PAGE_DATA_REQUEST_PATH = '/api/page-relocation-help?populate=deep';

export const generateMetadata = async () => {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function RelocationHelpPage() {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  const { SectionWithFeatures, BlockStepsPlan } = data.data.attributes;

  return (
    <PageTemplate>
      <main className={styles.page}>
        <div className="container">
          <SectionRelocationHelpHero {...SectionWithFeatures} />
        </div>

        <div className="container">
          <SectionBlockStepsPlan {...BlockStepsPlan} />
        </div>

        <SectionFeedbackList firstSlideTheme="dark" />

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
