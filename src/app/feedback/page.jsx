import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import getFeedbacks from '@/app/api/strapi/feedbacks/route';
import ResultsList from './ResultsList';
import request from '@/app/utils/request';
import styles from './styles.module.scss';

const PAGE_DATA_REQUEST_PATH = '/api/strapi/page/feedbacks';

export const generateMetadata = async () => {
  const { data } = await request.get(PAGE_DATA_REQUEST_PATH);

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function PageFeedback() {
  const { data } = await request.get(PAGE_DATA_REQUEST_PATH);
  const feedbacks = await getFeedbacks();

  const { title, moreReviewsBtn } = data.data.attributes;

  return (
    <PageTemplate>
      <main className={styles.pageFeedback}>
        <div className="container">
          <header>
            <h1>{title}</h1>
          </header>

          <ResultsList feedbacks={feedbacks} moreReviewsBtn={moreReviewsBtn} />
        </div>

        <div className="container">
          <section className={styles.sectionForm}>
            <ContactFormWrapper />
          </section>
        </div>
      </main>
    </PageTemplate>
  );
}
