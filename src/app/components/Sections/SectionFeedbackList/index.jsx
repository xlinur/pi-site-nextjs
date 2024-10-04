import Button from '@/app/components/Button';
import SliderFeedback from '@/app/components/Sliders/SliderFeedback';

import feedbacks from '@/app/api/strapi/feedbacks/route';
import sectionWhatOurCliensSay from '@/app/api/strapi/sectionWhatOurCliensSay/route';

import styles from './styles.module.scss';
import { routes } from '@/config/routes';

// theme = dark | light
export default async function SectionFeedbackList({ inData, theme }) {
  const data = await feedbacks();

  const { title, readMoreBtn, readAllBtn } = await sectionWhatOurCliensSay();

  return (
    <section className={styles.sectionFeedback}>
      <div className="container">
        <header>
          <h3>{title}</h3>

          <Button
            theme="transparent"
            name={readMoreBtn.name}
            url={routes.feedbacks()}
          />
        </header>
      </div>

      <div className={styles.slider}>
        <SliderFeedback data={inData || data} readAllBtn={readAllBtn} />
      </div>

      <div className={styles.readMoreBtn}>
        <Button theme="secondary" name={readMoreBtn.name} />
      </div>
    </section>
  );
}

SectionFeedbackList;
