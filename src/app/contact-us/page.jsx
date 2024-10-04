import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionSocialMedia from '@/app/components/Sections/SectionSocialMedia';

import pageContactUs from '@/app/api/strapi/pageContactUs/route';

import styles from './styles.module.scss';

export const generateMetadata = async () => {
  const { SEO } = await pageContactUs();

  return createMetadataFromSeo(SEO);
};

export default async function PageContactUs() {
  const { title } = await pageContactUs();

  return (
    <PageTemplate>
      <main className={styles.pageContactUs}>
        <div className="container">
          <h1 className="h2">{title}</h1>

          <section className={styles.sectionForm}>
            <ContactFormWrapper />
          </section>
        </div>

        <div className="container">
          <SectionSocialMedia withAdditionalInfo={true} />
        </div>
      </main>
    </PageTemplate>
  );
}
