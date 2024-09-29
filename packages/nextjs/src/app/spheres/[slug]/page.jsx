import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import SectionInfoWithCards from '@/app/components/Sections/SectionInfoWithCards';
import SectionKeySectors from '@/app/components/Sections/SectionKeySectors';
import SectionCustomVision from '@/app/components/Sections/SectionCustomVision';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionCompaniesLogo from '@/app/components/Sections/SectionCompaniesLogo';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionSuccessStories from '@/app/components/Sections/SectionSuccessStories';
import ContactForm from '@/app/components/ContactForm';

import styles from './styles.module.scss';

import { route, casesBySpheres } from '@/app/api/strapi/pageSpheres/route';

export default async function SpheresPage({ params }) {
  const { slug } = params;
  const {
    AnimatedHero,
    InfoWithCards,
    SectorsGrid,
    SectionWithIndustriesImage,
    feedbacks,
    Seo,
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
            <SectionCustomVision {...SectionWithIndustriesImage} />
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

        <div className={styles.sectionHelpWrapper}>
          <div className="container">
            <SectionWeCanHelp />
          </div>
        </div>

        <div className={styles.sectionFormWrapper}>
          <div className="container">
            <section className={styles.sectionForm}>
              <ContactForm />
            </section>
          </div>
        </div>
      </main>
    </PageTemplate>
  );
}
