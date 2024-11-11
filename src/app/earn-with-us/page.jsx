import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import Advantages from '@/app/components/Advantages';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionPaymentTerms from '@/app/components/Sections/SectionPaymentTerms';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import OpenModalFormButton from '@/app/components/OpenModalFormButton';
import fetchWrapper from '@/app/utils/fetchWrapper';
import styles from './styles.module.scss';

const PAGE_DATA_REQUEST_PATH = '/api/page-earn-with-us?populate=deep';

export const dynamic = 'force-dynamic';

export const generateMetadata = async () => {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function PageEarnWithUs() {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  const {
    AnimatedHero,
    Advantages: advantages,
    OurProcessOfInteraction,
    PaymentTerms,
  } = data.data.attributes;

  return (
    <PageTemplate>
      <main className={styles.pageContactUs}>
        <div>
          <SectionHero {...AnimatedHero} />

          <div className="container">
            <Advantages advantages={advantages.advantage} />
          </div>
        </div>

        <div className="container">
          <div className={styles.wrapperSectionHowWeWork}>
            <SectionHowWeWork
              {...OurProcessOfInteraction.treeSection}
              className={styles.componentSectionHowWeWork}
            />

            <OpenModalFormButton
              size="lg"
              name={OurProcessOfInteraction.applyNowBtn.name}
            />
          </div>
        </div>

        <div className="container">
          <SectionPaymentTerms {...PaymentTerms} />
        </div>

        <SectionWeCanHelp />

        {/* @Component SectionContactForm */}
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
