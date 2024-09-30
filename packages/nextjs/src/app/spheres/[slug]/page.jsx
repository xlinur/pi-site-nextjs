import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import SectionInfoWithCards from '@/app/components/Sections/SectionInfoWithCards';
import SectionKeySectors from '@/app/components/Sections/SectionKeySectors';
import SectionCustomVision from '@/app/components/Sections/SectionCustomVision';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionCompaniesLogo from '@/app/components/Sections/SectionCompaniesLogo';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionSuccessStories from '@/app/components/Sections/SectionSuccessStories';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';

import styles from './styles.module.scss';

import { route, casesBySpheres } from '@/app/api/strapi/pageSpheres/route';

export const generateMetadata = async () => {
  const { SEO } = await casesBySpheres();

  return createMetadataFromSeo(SEO);
};

export default async function SpheresPage({ params }) {
  const { slug } = params;
  const {
    AnimatedHero,
    InfoWithCards,
    SectorsGrid,
    SectionWithIndustriesImage,
    feedbacks,
  } = await route(slug);

  const cases = await casesBySpheres();

  return (
    <PageTemplate>
      <main>
        <SectionHero {...AnimatedHero} />

        <div className="container">
          <SectionInfoWithCards {...InfoWithCards} />
        </div>

        <div className="container">
          <SectionKeySectors {...SectorsGrid} />
        </div>

        <div className={styles.sectionCustomVisionWrapper}>
          <div className="container">
            <SectionCustomVision
              {...SectionWithIndustriesImage}
              openModal
              url={null}
            />
          </div>
        </div>

        <SectionCompaniesLogo />

        <div className={styles.sectionFeedbackWrapper}>
          <SectionFeedbackList
            inData={feedbacks.data}
            firstSlideTheme="white"
          />
        </div>

        <div className={styles.sectionMoreCasesWrapper}>
          <SectionSuccessStories cases={cases} />
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
