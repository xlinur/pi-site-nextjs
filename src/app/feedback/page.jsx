import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import ResultsList from './ResultsList';
import fetchWrapper from '@/app/utils/fetchWrapper';
import styles from './styles.module.scss';

const PAGE_DATA_REQUEST_PATH = '/api/page-feedbacks?populate=deep';

export const dynamic = 'force-dynamic';

export const generateMetadata = async () => {
  const data = await fetchWrapper(PAGE_DATA_REQUEST_PATH);

  return createMetadataFromSeo(data.data.attributes.SEO);
};

export default async function PageFeedback() {
  const [pageData, feedbacks] = await Promise.all([
    fetchWrapper(PAGE_DATA_REQUEST_PATH),
    fetchWrapper('/api/feedbacks?populate=deep'),
  ]);

  const { title, moreReviewsBtn } = pageData.data.attributes;

  return (
    <PageTemplate>
      <main className={styles.pageFeedback}>
        <div className="container">
          <header>
            <h1>{title}</h1>
          </header>

          <ResultsList
            feedbacks={feedbacks.data}
            moreReviewsBtn={moreReviewsBtn}
          />
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
