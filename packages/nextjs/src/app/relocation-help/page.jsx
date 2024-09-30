import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionRelocationHelpHero from '@/app/components/Sections/SectionRelocationHelpHero';
import SectionBlockStepsPlan from '@/app/components/Sections/SectionBlockStepsPlan';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';

import styles from './styles.module.scss';

import pageRelocationHelp from '@/app/api/strapi/pageRelocationHelp/route';

export const generateMetadata = async () => {
  const { SEO } = await pageRelocationHelp();

  return createMetadataFromSeo(SEO);
};

export default async function RelocationHelpPage() {
  const { RelocationHelpHero, BlockStepsPlan } = await pageRelocationHelp();

  return (
    <PageTemplate>
      <main className={styles.relocationHelpPage}>
        <div className="container">
          <SectionRelocationHelpHero {...RelocationHelpHero} />
        </div>

        <div className="container">
          <SectionBlockStepsPlan {...BlockStepsPlan} />
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
