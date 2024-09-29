import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import Advantages from '@/app/components/Advantages';
import ContactForm from '@/app/components/ContactForm';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionPaymentTerms from '@/app/components/Sections/SectionPaymentTerms';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import pageEarnWithUs from '@/app/api/strapi/pageEarnWithUs/route';

import Button from '@/app/components/Button';

import styles from './styles.module.scss';

export const generateMetadata = async () => {
  const { SEO } = await PageEarnWithUs();

  return createMetadataFromSeo(SEO);
};

export default async function PageEarnWithUs() {
  const {
    AnimatedHero,
    Advantages: advantages,
    OurProcessOfInteraction,
  } = await pageEarnWithUs();
  return (
    <PageTemplate>
      <main className={styles.pageContactUs}>
        <SectionHero {...AnimatedHero} />

        <div className="container">
          <Advantages advantages={advantages.advantage} />
        </div>

        <div className="container">
          <div className={styles.wrapperSectionHowWeWork}>
            <SectionHowWeWork
              {...OurProcessOfInteraction.treeSection}
              type="horizontal"
            />

            <Button size="lg" name={OurProcessOfInteraction.applyNowBtn.name} />
          </div>
        </div>

        <div className="container">
          <SectionPaymentTerms />
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
