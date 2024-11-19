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
import fetchWrapper from '@/app/utils/fetchWrapper';
import styles from './styles.module.scss';

const PAGE_DATA_REQUEST_PATH = (slug) =>
  `/api/spheres?populate=deep&filters[slug][$eq]=${slug}`;

export const dynamic = 'force-dynamic';

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH(slug));

  return createMetadataFromSeo(data.data[0].attributes.SEO);
};

export default async function SpheresPage({ params }) {
  const { slug } = params;

  const [data, casesBySphere] = await Promise.all([
    fetchWrapper(PAGE_DATA_REQUEST_PATH(slug)),
    fetchWrapper('/api/cases?populate=deep'),
  ]);

  const {
    AnimatedHero,
    InfoWithCards,
    SectorsGrid,
    SectionWithIndustriesImage,
    feedbacks,
  } = data.data[0].attributes;

  const cases = casesBySphere.data;

  return (
    <PageTemplate>
      <main>
        <div className={styles.customGapHero}>
          <SectionHero {...AnimatedHero} />

          <div className="container">
            <SectionInfoWithCards {...InfoWithCards} />
          </div>
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

        <SectionFeedbackList
          externalData={feedbacks}
          firstSlideTheme="white"
          sectionClass={styles.sectionFeedbackWrapper}
        />

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
