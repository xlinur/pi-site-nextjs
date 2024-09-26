import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionRelocationHelpHero from '@/app/components/Sections/SectionRelocationHelpHero';
import SectionBlockStepsPlan from '@/app/components/Sections/SectionBlockStepsPlan';
import ContactForm from '@/app/components/ContactForm';

import styles from './styles.module.scss';

import pageRelocationHelp from '@/app/api/strapi/pageRelocationHelp/route';

export default async function RelocationHelpPage() {
  const { RelocationHelpHero, BlockStepsPlan } = await pageRelocationHelp();

  return (
    <main className={styles.relocationHelpPage}>
      <div className="container">
        <SectionRelocationHelpHero {...RelocationHelpHero} />
      </div>

      <div className="container">
        <SectionBlockStepsPlan {...BlockStepsPlan} />
      </div>

      <div className={styles.sectionFeedbackWrapper}>
        <SectionFeedbackList firstSlideTheme="white" />
      </div>

      <div className={styles.sectionHelpWrapper}>
        <div className="container">
          <SectionWeCanHelp />
        </div>
      </div>

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
