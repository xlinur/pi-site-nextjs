import Button from '@/app/components/Button';
import SliderFeedback from '@/app/components/Sliders/SliderFeedback';
import fetchWrapper from '@/app/utils/fetchWrapper';
import styles from './styles.module.scss';
import { routes } from '@/config/routes';
import clsx from 'clsx';

export default async function SectionFeedbackList({
  externalData,
  sliderClass,
  sectionClass,
  firstSlideTheme,
}) {
  const [clientsFeedbacksData, feedbacksData] = await Promise.all([
    fetchWrapper('/api/section-what-our-cliens-say?populate=deep'),
    externalData ? externalData : fetchWrapper('/api/feedbacks?populate=deep'),
  ]);

  const { title, readMoreBtn, readAllBtn } =
    clientsFeedbacksData.data.attributes;

  if (!feedbacksData?.data?.length) {
    return null;
  }

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
          data={feedbacksData.data}
          readAllBtn={readAllBtn}
          className={clsx(
            sliderClass,
            styles[`first-slide--${firstSlideTheme}`],
          )}
        />
      </div>

      <div className={styles.readMoreBtn}>
        <Button theme="secondary" name={readMoreBtn.name} />
      </div>
    </section>
  );
}

SectionFeedbackList;
