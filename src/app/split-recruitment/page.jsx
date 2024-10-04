import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionAboutPersonalinvest from '@/app/components/Sections/SectionAboutPersonalinvest';
import SectionHero from '@/app/components/Sections/SectionHero';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';

import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import SectionPaymentTerms from '@/app/components/Sections/SectionPaymentTerms';
import SectionProposal from '@/app/components/Sections/SectionProposal';

import styles from './styles.module.scss';

import pageSplitRecruitment from '@/app/api/strapi/pageSplitRecruitment/route';

export const generateMetadata = async () => {
  const { SEO } = await pageSplitRecruitment();

  return createMetadataFromSeo(SEO);
};

export default async function PageSplitRecruitment() {
  const { AnimatedHero, Proposal, TreeSection } = await pageSplitRecruitment();

  return (
    <PageTemplate>
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

        <SectionWeCanHelp />

        <div className={styles.sectionFormWrapper}>
          <div className="container">
            <section className={styles.sectionForm}>
              <ContactFormWrapper />
            </section>
          </div>
        </div>
      </main>
    </PageTemplate>
  );
}
