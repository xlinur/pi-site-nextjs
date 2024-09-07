import Image from 'next/image';

import earthSVG from '@/app/assets/icons/earth.svg';
import countriesSVG from '@/app/assets/icons/countries.svg';

import HeroMain from '@/app/components/Sections/Heros/HeroMain';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionCustomVision from '@/app/components/Sections/SectionCustomVision';
import SectionRecruitmentProcess from '@/app/components/Sections/SectionRecruitmentProcess';
import SectionCompaniesLogo from '@/app/components/Sections/SectionCompaniesLogo';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionMeetGallery from '@/app/components/Sections/SectionMeetGallery';
import Button from '@/app/components/Button';
import ContactForm from '@/app/components/ContactForm';
import CardSocialMedia from '@/app/components/Cards/CardSocialMedia';
import Advantages from '@/app/components/Advantages';
import Worldwide from '@/app/components/Worldwide';
import homePageRequest from '@/app/api/strapi/homePage/route';

import styles from './styles.module.scss';

export default async function Home() {
  const { WhyPersonalInvest, WhyPersonalInvestItems } = await homePageRequest();

  return (
    <main className={styles.pageMain}>
      {/* @Component HeroMain */}
      <HeroMain>
        <Advantages />
        <Worldwide />
      </HeroMain>

      {/* @Component SectionWeCanHelp */}
      <div className={styles.sectionHelpWrapper}>
        <div className="container">
          <SectionWeCanHelp />
        </div>
      </div>

      {/* @Component SectionCustomVision */}
      <div className={styles.sectionCustomVisionWrapper}>
        <div className="container">
          <SectionCustomVision />
        </div>
      </div>

      {/* @Component SectionRecruitmentProcess */}
      <div className={styles.sectionRecruitmentProcessWrapper}>
        <div className="container">
          <SectionRecruitmentProcess />
        </div>
      </div>

      <div className={styles.sectionPlanetWrapper}>
        <div className="container">
          <section className={styles.sectionPlanet}>
            <h2>
              Trusted by companies smail and
              <br />
              large around the globe
            </h2>

            <div className={styles.planet}>
              <div>
                <Image src={earthSVG} alt="Image" width={882} height={882} />
              </div>
              <div>
                <Image
                  src={countriesSVG}
                  alt="Image"
                  width={740}
                  height={542}
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className={styles.sectionWhyWrapper}>
        <div className="container">
          <section className={styles.sectionWhy}>
            <h2>{WhyPersonalInvest.title}</h2>

            <div className={styles.reasons}>
              {WhyPersonalInvestItems.map(({ title, description }) => (
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
