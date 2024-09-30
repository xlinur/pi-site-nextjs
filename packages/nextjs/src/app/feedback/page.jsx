import { createMetadataFromSeo } from '@/app/utils/metadata';
import PageTemplate from '@/app/components/PageTemplate';
import Button from '@/app/components/Button';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import CardFeedback from '@/app/components/Cards/CardFeedback';

import styles from './styles.module.scss';
import pageFeedbacks from '@/app/api/strapi/pageFeedbacks/route';

export const generateMetadata = async () => {
  const { SEO } = await pageFeedbacks();

  return createMetadataFromSeo(SEO);
};

export default async function PageFeedback() {
  const { title, moreReviewsBtn } = await pageFeedbacks();

  return (
    <PageTemplate>
      <main className={styles.pageFeedback}>
        <div className="container">
          <header>
            <h1>{title}</h1>

            <div className={styles.feedbackSectionLinks}>
              <Button theme="secondary">IT Recruitment</Button>
              <Button theme="secondary">Executive Search</Button>
              <Button theme="secondary">GameDev</Button>
              <Button theme="secondary">Cases</Button>
              <Button theme="secondary">Business Consulting</Button>
              <Button theme="secondary">AI</Button>
            </div>
          </header>

          <section className={styles.feedbackExpandableList}>
            <div className={styles.feedbackExpandableListGrid}>
              {Array.from(Array(10)).map((_, idx) => (
                <CardFeedback key={idx} />
              ))}
            </div>

            <Button size="lg" name={moreReviewsBtn.name} />
          </section>
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
