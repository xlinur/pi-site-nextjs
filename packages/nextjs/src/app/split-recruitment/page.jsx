import SectionAboutPersonalinvest from '@/app/components/Sections/SectionAboutPersonalinvest';
import SectionHero from '@/app/components/Sections/SectionHero';
import ContactForm from '@/app/components/ContactForm';

import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import SectionPaymentTerms from '@/app/components/Sections/SectionPaymentTerms';
import SectionProposal from '@/app/components/Sections/SectionProposal';

import styles from './styles.module.scss';

import pageSplitRecruitment from '@/app/api/strapi/pageSplitRecruitment/route';

export default async function PageSplitRecruitment() {
  const { AnimatedHero, Proposal, TreeSection } = await pageSplitRecruitment();

  return (
    <main className={styles.pageRecruitment}>
      <SectionHero {...AnimatedHero} />

      <div className="container">
        <section className={styles.sectionAboutWrapper}>
          <div className={styles.firstBlock}>
            <SectionAboutPersonalinvest />
          </div>
        </section>
      </div>

      <div className="container">
        <SectionProposal {...Proposal} />
      </div>

      <div className="container">
        <SectionPaymentTerms />
      </div>

      <div className="container">
        <SectionHowWeWork {...TreeSection} fitContent />
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
