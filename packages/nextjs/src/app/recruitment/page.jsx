import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import ContactForm from '@/app/components/ContactForm';

import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionCustomVision from '@/app/components/Sections/SectionCustomVision';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import SectionInfoWithCards from '@/app/components/Sections/SectionInfoWithCards';
import SectionTypesOfRecruitment from '@/app/components/Sections/SectionTypesOfRecruitment';
import SectionNeedHelpSection from '@/app/components/Sections/SectionNeedHelpSection';
import SectionPricing from '@/app/components/Sections/SectionPricing';

import pageRecruitment from '@/app/api/strapi/pageRecruitment/route';

import styles from './styles.module.scss';

export default async function PageRecruitment() {
  const {
    AnimatedHero,
    InfoWithCards,
    TreeSection,
    TypesOfRecruitment,
    NeedHelpSection,
    Pricing,
    SectionWithIndustriesImage,
  } = await pageRecruitment();

  return (
    <PageTemplate>
      <main className={styles.pageRecruitment}>
        <SectionHero {...AnimatedHero} />

        <div className="container">
          <SectionInfoWithCards {...InfoWithCards} />
        </div>

        <div className="container">
          <SectionHowWeWork {...TreeSection} />
        </div>

        <div className="container">
          <SectionTypesOfRecruitment {...TypesOfRecruitment} />
        </div>

        <SectionNeedHelpSection {...NeedHelpSection} />

        {/* @Component(single) Pricing */}
        <div className="container">
          <SectionPricing {...Pricing} />
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
