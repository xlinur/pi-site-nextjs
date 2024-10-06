import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionCaseHero from '@/app/components/Sections/SectionCaseHero';
import SectionRecruitmentSummary from '@/app/components/Sections/SectionRecruitmentSummary';
import SectionCompleteTask from '@/app/components/Sections/SectionCompleteTask';
import SectionTalentMatch from '@/app/components/Sections/SectionTalentMatch';
import SectionRelocationHelpHero from '@/app/components/Sections/SectionRelocationHelpHero';
import SectionSuccessStories from '@/app/components/Sections/SectionSuccessStories';
import PageTemplate from '@/app/components/PageTemplate';
import request from '@/app/utils/request';
import { createMetadataFromSeo } from '@/app/utils/metadata';
import styles from './styles.module.scss';

const PAGE_DATA_REQUEST_PATH = (slug) => `/api/strapi/cases/${slug}`;

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const { data } = await request.get(PAGE_DATA_REQUEST_PATH(slug));

  return createMetadataFromSeo(data.data.attributes?.SEO);
};

export default async function PageCase({ params }) {
  const { slug } = params;

  const { data: caseData } = await request.get(PAGE_DATA_REQUEST_PATH(slug));
  const { data: casesBySphere } = await request.get('/api/strapi/cases');

  const {
    SectionCaseHero: CaseHero,
    SectionRecruitmentSummary: RecruitmentSummary,
    SectionWithFeatures,
    SectionCompleteTask: CompleteTask,
    SectionTalentMatch: TalentMatch,
  } = caseData.data[0].attributes;

  const cases = casesBySphere.data;

  return (
    <PageTemplate>
      <main className={styles.page}>
        <div className="container">
          <SectionCaseHero {...CaseHero} />
        </div>

        <div className="container">
          <SectionRecruitmentSummary {...RecruitmentSummary} />
        </div>

        <div className="container">
          <SectionRelocationHelpHero {...SectionWithFeatures} isNotHero />
        </div>

        <div className="container">
          <SectionCompleteTask {...CompleteTask} />
        </div>

        <div className={styles.fillContainer}>
          <div className="container">
            <SectionTalentMatch {...TalentMatch} />
          </div>
        </div>

        {cases?.length && (
          <div className={styles.sectionMoreCasesWrapper}>
            <SectionSuccessStories cases={cases} />
          </div>
        )}

        <div className="container">
          <section className={styles.sectionForm}>
            <ContactFormWrapper />
          </section>
        </div>
      </main>
    </PageTemplate>
  );
}
