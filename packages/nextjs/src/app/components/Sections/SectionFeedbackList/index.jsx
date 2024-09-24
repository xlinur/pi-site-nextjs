import Button from '@/app/components/Button';
import SliderFeedback from '@/app/components/Sliders/SliderFeedback';

import styles from './styles.module.scss';

const SectionFeedbackList = ({ firstSlideTheme }) => {
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
        <SliderFeedback
          firstSlideTheme={firstSlideTheme}
          readAllBtn={mok.readAllBtn}
        />
      </div>
    </section>
  );
};

export default SectionFeedbackList;
