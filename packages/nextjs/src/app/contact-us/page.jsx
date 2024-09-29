import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import ContactForm from '@/app/components/ContactForm';
import SectionContactUs from '@/app/components/Sections/SectionContactUs';

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
            <ContactForm />
          </section>

          <div className={styles.contactsSocialWrapper}>
            <SectionContactUs withAdditionalInfo={true} />
          </div>
        </div>
      </main>
    </PageTemplate>
  );
}
