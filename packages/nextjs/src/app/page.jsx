import HeroMain from '@/app/components/HeroMain';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionCustomVision from '@/app/components/Sections/SectionCustomVision';
import SectionRecruitmentProcess from '@/app/components/Sections/SectionRecruitmentProcess';
import SectionCompaniesLogo from '@/app/components/Sections/SectionCompaniesLogo';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionMeetGallery from '@/app/components/Sections/SectionMeetGallery';
import SectionTrustedMap from '@/app/components/Sections/SectionTrustedMap';
import Button from '@/app/components/Button';
import ContactForm from '@/app/components/ContactForm';
import CardSocialMedia from '@/app/components/Cards/CardSocialMedia';

import homePageRequest from '@/app/api/strapi/homePage/route';

import styles from './styles.module.scss';
import clsx from 'clsx';

export default async function Home() {
  const data = await homePageRequest();
  const {
    HeroSection,
    SectionWithIndustriesImage,
    TrustedMap,
    WhyInfoSection,
    ExclusiveProcess,
  } = await data;
  // debug
  console.log(data);

  return (
    <main className={styles.pageMain}>
      {/* @Component HeroMain */}
      <HeroMain {...HeroSection} />

      {/* @Component SectionWeCanHelp */}
      <div className={styles.sectionHelpWrapper}>
        <div className="container">
          <SectionWeCanHelp />
        </div>
      </div>

      {/* @Component SectionCustomVision */}
      <div className={styles.sectionCustomVisionWrapper}>
        <div className="container">
          <SectionCustomVision {...SectionWithIndustriesImage} />
        </div>
      </div>

      {/* @Component SectionRecruitmentProcess */}
      <div className={styles.sectionRecruitmentProcessWrapper}>
        <div className="container">
          <SectionRecruitmentProcess {...ExclusiveProcess} />
        </div>
      </div>

      <div className={styles.sectionPlanetWrapper}>
        <div className="container">
          <SectionTrustedMap {...TrustedMap} />
        </div>
      </div>

      {/* @Component */}
      <div className={styles.sectionWhyWrapper}>
        <div className="container">
          <section
            className={clsx(
              WhyInfoSection.withBackground && styles.withBackground,
              styles.sectionWhy,
            )}
          >
            <h2>{WhyInfoSection.title}</h2>

            <div className={styles.reasons}>
              {WhyInfoSection.reasons?.map(({ title, description }) => (
                <div className={styles.reasonsItem} key={title}>
                  <h5 className={styles.reasonsItemTitle}>{title}</h5>
                  <p className={styles.reasonsItemText}>{description}</p>
                </div>
              ))}
              <div className={styles.reasonsItem}>
                <div className={styles.reasonsItemTitle}></div>
                <div className={styles.reasonsItemText}>
                  <Button theme="primary">Find the best tech talents</Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* @Component SectionCompaniesLogo */}
      <SectionCompaniesLogo />

      {/* @Component SectionFeedbackList */}
      <div className={styles.sectionFeedbackWrapper}>
        <SectionFeedbackList firstSlideTheme="white" />
      </div>

      {/* @Component SectionMeetGallery */}
      <div className={styles.sectionMeetWrapper}>
        <div className="container">
          <SectionMeetGallery />
        </div>
      </div>

      {/* @Component SectionContactForm */}
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
  );
}
