import SectionHero from '@/app/components/Sections/SectionHero';
import SectionAboutPersonalinvest from '@/app/components/Sections/SectionAboutPersonalinvest';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import ContactForm from '@/app/components/ContactForm';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import SectionContactUs from '@/app/components/Sections/SectionContactUs';
import SectionOurFounder from '@/app/components/Sections/SectionOurFounder';
import SectionOurTeam from '@/app/components/Sections/SectionOurTeam';
import SectionTrustedMap from '@/app/components/Sections/SectionTrustedMap';

import pageAboutUs from '@/app/api/strapi/pageAboutUs/route';

import styles from './styles.module.scss';

export default async function PageAboutUs() {
  const { AnimatedHero, TreeSection, OurFounder, OurTeam } =
    await pageAboutUs();

  return (
    <main>
      <SectionHero {...AnimatedHero} />

      <div className="container">
        <div className={styles.firstBlock}>
          <SectionAboutPersonalinvest />
        </div>
      </div>

      <div className="container">
        <SectionHowWeWork {...TreeSection} />
      </div>

      <div className="container">
        <SectionOurFounder {...OurFounder} />
      </div>

      <div className="container">
        <SectionOurTeam {...OurTeam} />
      </div>

      <div className="container">
        <SectionTrustedMap variant="some" />
      </div>

      <SectionFeedbackList firstSlideTheme="dark" />

      {/* @Component SectionWeCanHelp */}
      <div className={styles.sectionHelpWrapper}>
        <div className="container">
          <SectionWeCanHelp />
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
          <SectionContactUs />
        </div>
      </div>
    </main>
  );
}
