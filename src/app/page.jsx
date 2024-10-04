import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import HeroMain from '@/app/components/HeroMain';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionCustomVision from '@/app/components/Sections/SectionCustomVision';
import SectionRecruitmentProcess from '@/app/components/Sections/SectionRecruitmentProcess';
import SectionCompaniesLogo from '@/app/components/Sections/SectionCompaniesLogo';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionMeetGallery from '@/app/components/Sections/SectionMeetGallery';
import SectionTrustedMap from '@/app/components/Sections/SectionTrustedMap';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';

import SectionWhyInfo from '@/app/components/Sections/SectionWhyInfo';
import SectionSocialMedia from '@/app/components/Sections/SectionSocialMedia';

import request from '@/app/utils/request';

import styles from './styles.module.scss';
import { routes } from '@/config/routes';

export const generateMetadata = async () => {
  const { data } = await request.get('/api/strapi/page/home');

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function Home() {
  const { data } = await request.get('/api/strapi/page/home');

  const {
    HeroSection,
    SectionWithIndustriesImage,
    WhyInfoSection,
    ExclusiveProcess,
    MeetOurTeam,
  } = data.data.attributes;

  return (
    <PageTemplate>
      <main className={styles.pageMain}>
        <HeroMain {...HeroSection} />

        <SectionWeCanHelp />

        <div className={styles.sectionCustomVisionWrapper}>
          <div className="container">
            <SectionCustomVision
              {...SectionWithIndustriesImage}
              url={routes.vacancies()}
            />
          </div>
        </div>

        <div className={styles.sectionRecruitmentProcessWrapper}>
          <div className="container">
            <SectionRecruitmentProcess {...ExclusiveProcess} />
          </div>
        </div>

        <div className={styles.sectionPlanetWrapper}>
          <div className="container">
            <SectionTrustedMap />
          </div>
        </div>

        <div className={styles.sectionWhyWrapper}>
          <div className="container">
            <SectionWhyInfo {...WhyInfoSection} />
          </div>
        </div>

        <SectionCompaniesLogo />

        <div className={styles.sectionFeedbackWrapper}>
          <SectionFeedbackList theme="dark" />
        </div>

        <div className={styles.sectionMeetWrapper}>
          <div className="container">
            <SectionMeetGallery {...MeetOurTeam} />
          </div>
        </div>

        <div className="container">
          <section className={styles.sectionForm}>
            <ContactFormWrapper />
          </section>
        </div>

        <div className="container">
          <SectionSocialMedia />
        </div>
      </main>
    </PageTemplate>
  );
}
