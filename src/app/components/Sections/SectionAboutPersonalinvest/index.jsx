import clsx from 'clsx';
import Image from 'next/image';
import peopleSVG from '@/app/assets/icons/people-1-white.svg';
import fetchWrapper from '@/app/utils/fetchWrapper';
import Markdown from '@/app/components/Markdown';
import styles from './styles.module.scss';

const checkCircle = (
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

export default async function SectionAboutPersonalinvest({ withTitle }) {
  const data = await fetchWrapper(
    '/api/section-about-personalinvest?populate=deep',
  );

  const { numbers, title, info } = data.data.attributes;

  return (
    <section className={styles.wrapper}>
      {withTitle && <h2>{title}</h2>}

      <div className={styles.first}>
        {numbers.map((item, idx) => (
          <article className={styles.item} key={idx}>
            <header className={styles.title}>
              <h5>{item.count} +</h5>
            </header>

            <p className={clsx(styles.text, 'h5')}>{item.description}</p>
          </article>
        ))}
      </div>

      <div className={styles.second}>
        <header>
          <Image src={peopleSVG} alt="People icon" width={128} height={128} />
        </header>

        <ul className={styles.list}>
          {info.map((item, idx) => (
            <li className={styles.listItem} key={idx}>
              <div className={styles.listItemIcon}>{checkCircle}</div>

              <div className={styles.listItemContent}>
                <h4>{item.title}</h4>
                <Markdown>{item?.description}</Markdown>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
