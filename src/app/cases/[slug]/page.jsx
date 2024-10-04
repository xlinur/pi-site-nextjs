import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionCaseHero from '@/app/components/Sections/SectionCaseHero';
import SectionRecruitmentSummary from '@/app/components/Sections/SectionRecruitmentSummary';
import SectionCompleteTask from '@/app/components/Sections/SectionCompleteTask';
import SectionTalentMatch from '@/app/components/Sections/SectionTalentMatch';
import SectionRelocationHelpHero from '@/app/components/Sections/SectionRelocationHelpHero';
import SectionSuccessStories from '@/app/components/Sections/SectionSuccessStories';
import PageTemplate from '@/app/components/PageTemplate';
import request from '@/app/utils/request';
import styles from './styles.module.scss';
import { casesBySpheres } from '@/app/api/strapi/pageSpheres/route';

export default async function PageCase({ params }) {
  const { slug } = params;

  const { data } = await request.get(`/api/strapi/page/cases/${slug}`);

  const {
    SectionCaseHero: CaseHero,
    SectionRecruitmentSummary: RecruitmentSummary,
    SectionWithFeatures,
    SectionCompleteTask: CompleteTask,
    SectionTalentMatch: TalentMatch,
  } = data.data[0].attributes;

  const cases = await casesBySpheres();

  return (
    <PageTemplate>
      {console.log({ data })}
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

        <div className={styles.sectionMoreCasesWrapper}>
          <SectionSuccessStories cases={cases} />
        </div>

        <div className="container">
          <section className={styles.sectionForm}>
            <ContactFormWrapper />
          </section>
        </div>
      </main>
    </PageTemplate>
  );
}
