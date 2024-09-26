import SectionHero from '@/app/components/Sections/SectionHero';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';

import ContactForm from '@/app/components/ContactForm';
import SectionConsultingServices from '@/app/components/Sections/SectionConsultingServices';
import SectionWhyInfo from '@/app/components/Sections/SectionWhyInfo';
import SectionExamplesOfBestPractices from '@/app/components/Sections/SectionExamplesOfBestPractices';

import styles from './styles.module.scss';

import pageConsulting from '@/app/api/strapi/pageConsulting/route';

export default async function PageConsulting() {
  const {
    AnimatedHero,
    ConsultingServices,
    WhyInfoSection,
    ExamplesOfBestPractices,
  } = await pageConsulting();

  return (
    <main className={styles.relocationHelpPage}>
      <SectionHero {...AnimatedHero} />

      {/* @Component */}
      <div className="container">
        <SectionConsultingServices {...ConsultingServices} />
      </div>

      <div className={styles.sectionWhyWrapper}>
        <div className="container">
          <SectionWhyInfo {...WhyInfoSection} />
        </div>
      </div>

      <div className="container">
        <SectionExamplesOfBestPractices {...ExamplesOfBestPractices} />
      </div>

      {/* @Component SectionFeedbackList */}
      <div className={styles.sectionFeedbackWrapper}>
        <SectionFeedbackList firstSlideTheme="white" />
      </div>

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
    </main>
  );
}
