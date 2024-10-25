import clsx from 'clsx';
import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import SectionAboutPersonalinvest from '@/app/components/Sections/SectionAboutPersonalinvest';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import SectionSocialMedia from '@/app/components/Sections/SectionSocialMedia';
import SectionOurFounder from '@/app/components/Sections/SectionOurFounder';
import SectionTrustedMap from '@/app/components/Sections/SectionTrustedMap';
import SectionMeetGallery from '@/app/components/Sections/SectionMeetGallery';
import fetchWrapper from '@/app/utils/fetchWrapper';
import styles from './styles.module.scss';

const PAGE_DATA_REQUEST_PATH = '/api/page-about-us?populate=deep';

export const dynamic = 'force-dynamic';

export const generateMetadata = async () => {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function AboutUs() {
  const [pageData, settingsData] = await Promise.all([
    fetchWrapper(PAGE_DATA_REQUEST_PATH),
    fetchWrapper('/api/global?populate=deep'),
  ]);

  const { AnimatedHero, TreeSection, OurFounder } = pageData.data.attributes;

  return (
    <PageTemplate>
      <main>
        <div>
          <SectionHero {...AnimatedHero} />

          <div className="container">
            <SectionAboutPersonalinvest />
          </div>
        </div>

        <div className="container">
          <SectionHowWeWork {...TreeSection} />
        </div>

        <div className="container">
          <SectionOurFounder {...OurFounder} settingsData={settingsData} />
        </div>

        <div className="container">
          <SectionMeetGallery />
        </div>

        <div className={clsx('container', styles.smSkipPadding)}>
          <SectionTrustedMap variant="some" />
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

        <div className="container">
          <SectionSocialMedia />
        </div>
      </main>
    </PageTemplate>
  );
}
