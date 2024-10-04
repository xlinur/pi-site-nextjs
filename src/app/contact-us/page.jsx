import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionSocialMedia from '@/app/components/Sections/SectionSocialMedia';
import styles from './styles.module.scss';
import request from '@/app/utils/request';

export const generateMetadata = async () => {
  const { data } = await request.get('/api/strapi/page/contact-us');

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function ContactUs() {
  const { data } = await request.get('/api/strapi/page/contact-us');

  const { title } = data.data.attributes;

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
