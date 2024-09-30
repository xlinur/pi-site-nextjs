import styles from './styles.module.scss';
import Markdown from 'react-markdown';
import Image from 'next/image';
import relocation from '@/app/assets/icons/relocation.png';

export default function SectionRecruitmentSummary({
  title,
  subtitle,
  items,
  companyOffered,
  companyOfferedText,
}) {
  return (
    <section className={styles.sectionRecruitmentSummary}>
      <header>
        <h3>
          <Markdown>{title}</Markdown>
        </h3>
        <Markdown>{subtitle}</Markdown>
      </header>

      <div className={styles.list}>
        {items.map((item, idx) => (
          <div className={styles.listItem} key={idx}>
            <div className={styles.title}>
              <span>
                {/* check-circle svg */}
                <svg
                  width="48"
                  height="48"
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
                <b>{item.title}</b>
              </span>
            </div>
            <div className={styles.text}>{item.description}</div>
          </div>
        ))}
      </div>

      <div className={styles.companyOffered}>
        <div>
          <h5>{companyOffered}</h5>
          <Image
            src={relocation}
            alt="location image"
            width={200}
            height={170}
          />
        </div>

        <div className={styles.companyOfferedDescription}>
          <h5>{companyOffered}</h5>
          {companyOfferedText}
        </div>
      </div>
    </section>
  );
}
