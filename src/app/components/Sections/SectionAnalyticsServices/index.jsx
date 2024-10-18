import Markdown from '@/app/components/Markdown';
import Button from '@/app/components/Button';

import { ANCHORS } from '@/app/core/constants/anchor';
import styles from './styles.module.scss';

const SectionAnalyticsServices = ({ title, services }) => {
  return (
    <section className={styles.sectionOurService}>
      <header>
        <h2>{title}</h2>
      </header>

      <div className={styles.sectionOurServiceGrid}>
        {services.map((item, idx) => (
          <div className={styles.servicesCard} key={idx}>
            <div className={styles.servicesCardTitle}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.6666 22.4666V23.9999C40.6645 27.594 39.5008 31.0911 37.3488 33.9696C35.1969 36.8482 32.1721 38.9541 28.7255 39.9731C25.279 40.9921 21.5954 40.8698 18.224 39.6242C14.8527 38.3787 11.9743 36.0768 10.0182 33.0617C8.06203 30.0467 7.1329 26.48 7.36938 22.8938C7.60586 19.3075 8.99526 15.8938 11.3304 13.1617C13.6655 10.4296 16.8212 8.52557 20.3269 7.73351C23.8326 6.94145 27.5004 7.30383 30.7833 8.7666"
                  stroke="#2DA5D9"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.6667 10.6667L24 27.3501L19 22.3501"
                  stroke="#2DA5D9"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h5>{item.title}</h5>
            </div>

            <div className={styles.servicesCardDescription}>
              <Markdown>{item.details}</Markdown>
            </div>

            <Button
              name={item.sendRequest.name}
              url={ANCHORS.CONTACT_FORM.ANCHOR}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionAnalyticsServices;
