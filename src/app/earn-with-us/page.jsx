import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import Advantages from '@/app/components/Advantages';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionPaymentTerms from '@/app/components/Sections/SectionPaymentTerms';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import OpenModalFormButton from '@/app/components/OpenModalFormButton';
import request from '@/app/utils/request';
import styles from './styles.module.scss';

export const generateMetadata = async () => {
  const { data } = await request.get('/api/strapi/page/earn-with-us');

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function PageEarnWithUs() {
  const { data } = await request.get('/api/strapi/page/earn-with-us');

  const {
    AnimatedHero,
    Advantages: advantages,
    OurProcessOfInteraction,
  } = data.data.attributes;

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

            <OpenModalFormButton
              size="lg"
              name={OurProcessOfInteraction.applyNowBtn.name}
            />
          </div>
        </div>

        <div className="container">
          <SectionPaymentTerms />
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
