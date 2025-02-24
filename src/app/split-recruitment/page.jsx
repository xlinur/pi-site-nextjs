import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionAboutPersonalinvest from '@/app/components/Sections/SectionAboutPersonalinvest';
import SectionHero from '@/app/components/Sections/SectionHero';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import SectionPaymentTerms from '@/app/components/Sections/SectionPaymentTerms';
import SectionProposal from '@/app/components/Sections/SectionProposal';
import fetchWrapper from '@/app/utils/fetchWrapper';
import styles from './styles.module.scss';

const PAGE_DATA_REQUEST_PATH = '/api/page-split-recruitment?populate=deep';

export const dynamic = 'force-dynamic';

export const generateMetadata = async () => {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function PageSplitRecruitment() {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  const { AnimatedHero, Proposal, TreeSection, PaymentTerms } =
    data.data.attributes;

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
          <SectionPaymentTerms {...PaymentTerms} />
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
