import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import ContactForm from '@/app/components/ContactForm';

import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionCustomVision from '@/app/components/Sections/SectionCustomVision';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import SectionKeySectors from '@/app/components/Sections/SectionKeySectors';

import pageIndustries from '@/app/api/strapi/pageIndustries/route';

import styles from './styles.module.scss';

export default async function PageIndustries() {
  const { AnimatedHero, SectorsGrid, TreeSection, SectionWithIndustriesImage } =
    await pageIndustries();

  return (
    <PageTemplate>
      <main className={styles.pageRecruitment}>
        <SectionHero {...AnimatedHero} />

        <div className="container">
          <SectionKeySectors {...SectorsGrid} />
        </div>

        <div className="container">
          <SectionHowWeWork {...TreeSection} />
        </div>

        {/* @Component SectionCustomVision */}
        <div className={styles.sectionCustomVisionWrapper}>
          <div className="container">
            <SectionCustomVision {...SectionWithIndustriesImage} />
          </div>
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
    </PageTemplate>
  );
}
