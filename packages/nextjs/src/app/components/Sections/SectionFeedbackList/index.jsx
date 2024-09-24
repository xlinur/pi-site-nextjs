import Button from '@/app/components/Button';
import SliderFeedback from '@/app/components/Sliders/SliderFeedback';

import feedbacks from '@/app/api/strapi/feedbacks/route';

import styles from './styles.module.scss';

export default async function SectionFeedbackList() {
  const data = await feedbacks();

  const mok = {
    title: 'What our clients say',
    readMoreBtn: 'Read more reviews',
    readAllBtn: 'Read all',
  };

  return (
    <section className={styles.sectionFeedback}>
      <div className="container">
        <header>
          <h3>{mok.title}</h3>

          <Button theme="secondary">{mok.readMoreBtn}</Button>
        </header>
      </div>

      <div className={styles.slider}>
        <SliderFeedback data={data} readAllBtn={mok.readAllBtn} />
      </div>
    </section>
  );
}

SectionFeedbackList;
