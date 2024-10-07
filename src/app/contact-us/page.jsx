import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionSocialMedia from '@/app/components/Sections/SectionSocialMedia';
import styles from './styles.module.scss';
import fetchWrapper from '@/app/utils/fetchWrapper';

const PAGE_DATA_REQUEST_PATH = '/api/page-contact-us?populate=deep';

export const generateMetadata = async () => {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function ContactUs() {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

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
