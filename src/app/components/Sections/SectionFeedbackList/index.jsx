import Button from '@/app/components/Button';
import SliderFeedback from '@/app/components/Sliders/SliderFeedback';
import request from '@/app/utils/request';
import styles from './styles.module.scss';
import { routes } from '@/config/routes';

export default async function SectionFeedbackList({ inData }) {
  const { data: clientsFeedbacksData } = await request.get(
    '/api/strapi/shared/clients-feedbacks',
  );
  const { data: feedbacksData } = await request.get('/api/strapi/feedbacks');

  const { title, readMoreBtn, readAllBtn } =
    clientsFeedbacksData.data.attributes;

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
        <SliderFeedback
          data={inData || feedbacksData.data}
          readAllBtn={readAllBtn}
        />
      </div>

      <div className={styles.readMoreBtn}>
        <Button theme="secondary" name={readMoreBtn.name} />
      </div>
    </section>
  );
}

SectionFeedbackList;
