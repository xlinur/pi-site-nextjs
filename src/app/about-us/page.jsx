import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import SectionHero from '@/app/components/Sections/SectionHero';
import SectionAboutPersonalinvest from '@/app/components/Sections/SectionAboutPersonalinvest';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import SectionSocialMedia from '@/app/components/Sections/SectionSocialMedia';
import SectionOurFounder from '@/app/components/Sections/SectionOurFounder';
import SectionOurTeam from '@/app/components/Sections/SectionOurTeam';
import SectionTrustedMap from '@/app/components/Sections/SectionTrustedMap';
import request from '@/app/utils/request';
import styles from './styles.module.scss';
import clsx from 'clsx';

export const generateMetadata = async () => {
  const { data } = await request.get('/api/strapi/page/about-us');

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function AboutUs() {
  const { data } = await request.get('/api/strapi/page/about-us');

  const { AnimatedHero, TreeSection, OurFounder, OurTeam } =
    data.data.attributes;

  return (
    <PageTemplate>
      <main>
        <SectionHero {...AnimatedHero} />

        <div className="container">
          <SectionAboutPersonalinvest />
        </div>

        <div className="container">
          <SectionHowWeWork {...TreeSection} />
        </div>

        <div className="container">
          <SectionOurFounder {...OurFounder} />
        </div>

        <div className="container">
          <SectionOurTeam {...OurTeam} />
        </div>

        <div className={clsx('container', styles.smSkipPadding)}>
          <SectionTrustedMap variant="some" />
        </div>

        <SectionFeedbackList />

        <SectionWeCanHelp />

        <div className={styles.sectionFormWrapper}>
          <div className="container">
            <section className={styles.sectionForm}>
              <ContactFormWrapper />
            </section>
          </div>
        </div>

        <div className="container">
          <SectionSocialMedia />
        </div>
      </main>
    </PageTemplate>
  );
}
