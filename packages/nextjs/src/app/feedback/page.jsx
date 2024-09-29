import PageTemplate from '@/app/components/PageTemplate';
import Button from '@/app/components/Button';
import ContactForm from '@/app/components/ContactForm';
import CardFeedback from '@/app/components/Cards/CardFeedback';

import styles from './styles.module.scss';
import pageFeedbacks from '@/app/api/strapi/pageFeedbacks/route';

export default async function PageFeedback() {
  const { title, moreReviewsBtn } = await pageFeedbacks();

  return (
    <PageTemplate>
      <main className={styles.pageFeedback}>
        <div className="container">
          <header>
            <h1 className="h2">{title}</h1>

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

            <Button name={moreReviewsBtn.name} />
          </section>

          <section className={styles.sectionForm}>
            <ContactForm />
          </section>
        </div>
      </main>
    </PageTemplate>
  );
}
