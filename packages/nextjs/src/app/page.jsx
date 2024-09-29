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
import SectionWhyInfo from '@/app/components/Sections/SectionWhyInfo';

import ContactForm from '@/app/components/ContactForm';
import CardSocialMedia from '@/app/components/Cards/CardSocialMedia';

import homePageRequest from '@/app/api/strapi/homePage/route';

import styles from './styles.module.scss';

export const generateMetadata = async () => {
  const { SEO } = await homePageRequest();

  return createMetadataFromSeo(SEO);
};

export default async function Home() {
  const {
    HeroSection,
    SectionWithIndustriesImage,
    WhyInfoSection,
    ExclusiveProcess,
    MeetOurTeam,
  } = await homePageRequest();

  return (
    <PageTemplate>
      <main className={styles.pageMain}>
        <HeroMain {...HeroSection} />

        <div className={styles.sectionHelpWrapper}>
          <div className="container">
            <SectionWeCanHelp />
          </div>
        </div>

        <div className={styles.sectionCustomVisionWrapper}>
          <div className="container">
            <SectionCustomVision {...SectionWithIndustriesImage} />
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
          <SectionFeedbackList />
        </div>

        <div className={styles.sectionMeetWrapper}>
          <div className="container">
            <SectionMeetGallery {...MeetOurTeam} />
          </div>
        </div>

        <div className={styles.sectionFormWrapper}>
          <div className="container">
            <section className={styles.sectionForm}>
              <ContactForm />
            </section>
          </div>
        </div>

        <div className={styles.sectionSocialMediaWrapper}>
          <div className="container">
            <section className={styles.sectionSocialMedia}>
              <header>
                <h3>
                  Follow us on <span>social media</span>
                </h3>
              </header>

              <div className={styles.sectionSocialMediaList}>
                <CardSocialMedia socialName="instagram" />
                <CardSocialMedia socialName="linkedin" />
                <CardSocialMedia socialName="facebook" />
              </div>
            </section>
          </div>
        </div>
      </main>
    </PageTemplate>
  );
}
