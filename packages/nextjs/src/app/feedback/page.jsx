import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import Button from '@/app/components/Button';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import CardFeedback from '@/app/components/Cards/CardFeedback';
import pageFeedbacks from '@/app/api/strapi/pageFeedbacks/route';
import getFeedbacks from '@/app/api/strapi/feedbacks/route';
import ResultsList from './ResultsList';

import styles from './styles.module.scss';

export const generateMetadata = async () => {
  const { SEO } = await pageFeedbacks();

  return createMetadataFromSeo(SEO);
};

export default async function PageFeedback() {
  const { title, moreReviewsBtn } = await pageFeedbacks();
  const feedbacks = await getFeedbacks();

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
