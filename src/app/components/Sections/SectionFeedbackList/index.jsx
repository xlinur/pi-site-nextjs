import Button from '@/app/components/Button';
import SliderFeedback from '@/app/components/Sliders/SliderFeedback';
import fetchWrapper from '@/app/utils/fetchWrapper';
import styles from './styles.module.scss';
import { routes } from '@/config/routes';
import clsx from 'clsx';

export default async function SectionFeedbackList({
  inData,
  sliderClass,
  sectionClass,
}) {
  const [clientsFeedbacksData, feedbacksData] = await Promise.all([
    fetchWrapper('/api/section-what-our-cliens-say?populate=deep'),
    fetchWrapper('/api/feedbacks?populate=deep'),
  ]);

  const { title, readMoreBtn, readAllBtn } =
    clientsFeedbacksData.data.attributes;

  return (
    <section className={clsx(styles.sectionFeedback, sectionClass)}>
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
        <SliderFeedback
          data={inData || feedbacksData.data}
          readAllBtn={readAllBtn}
          className={sliderClass}
        />
      </div>

      <div className={styles.readMoreBtn}>
        <Button theme="secondary" name={readMoreBtn.name} />
      </div>
    </section>
  );
}

SectionFeedbackList;
