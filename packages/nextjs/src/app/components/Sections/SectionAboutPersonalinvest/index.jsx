import Image from 'next/image';

import peopleSVG from '@/app/assets/icons/people-1-white.svg';

import styles from './styles.module.scss';

const CheckCircle = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 11.0818V12.0018C21.9988 14.1582 21.3005 16.2565 20.0093 17.9836C18.7182 19.7108 16.9033 20.9743 14.8354 21.5857C12.7674 22.1971 10.5573 22.1237 8.53447 21.3764C6.51168 20.6291 4.78465 19.2479 3.61096 17.4389C2.43727 15.6299 1.87979 13.4899 2.02168 11.3381C2.16356 9.18638 2.99721 7.13814 4.39828 5.49889C5.79935 3.85964 7.69279 2.7172 9.79619 2.24196C11.8996 1.76673 14.1003 1.98415 16.07 2.86182"
      stroke="#2DA5D9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 4L12 14.01L9 11.01"
      stroke="#2DA5D9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SectionAboutPersonalinvest = () => {
  const mok = {
    title: '',
    numbers: [
      {
        count: '8 500',
        description: 'job openings filled',
      },
      {
        count: '700',
        description: 'companies we worked with',
      },
      {
        count: '55',
        description: 'vacancies we close per month with minimum % of changes',
      },
    ],
    info: [
      {
        title: 'Speed of work',
        description: 'first vacancies in 3 days',
      },
      {
        title: 'Full cycle of recruitment',
        description:
          'preparation, sourcing, screening, selection, hiring and onboarding',
      },
      {
        title: 'Exclusive expertise',
        description:
          'Successful closing from junior to the TOP-management positions',
      },
      {
        title: 'Individual approach',
        description: 'first vacancies in 3 days',
      },
    ],
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.first}>
        {mok.numbers.map((item, idx) => (
          <article className={styles.item} key={idx}>
            <header className={styles.title}>
              <h5>{item.count} +</h5>
            </header>

            <p className={styles.text}>{item.description}</p>
          </article>
        ))}
      </div>

      <div className={styles.second}>
        <header>
          <h2 className="text">
            Personalinvest <br /> is
          </h2>
          <Image src={peopleSVG} alt="People icon" width={128} height={128} />
        </header>

        <ul className={styles.list}>
          {mok.info.map((item, idx) => (
            <li className={styles.listItem} key={idx}>
              <div className={styles.listItemIcon}>
                <CheckCircle />
              </div>

              <div className={styles.listItemContent}>
                <h4>{item.title}</h4>
                <p>{item?.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionAboutPersonalinvest;