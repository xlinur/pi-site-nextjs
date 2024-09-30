import Image from 'next/image';
import chat from '@/app/assets/icons/chat.svg';
import location from '@/app/assets/icons/location.svg';
import peoples from '@/app/assets/icons/peoples.svg';
import peoples01 from '@/app/assets/icons/people-1.svg';
import money from '@/app/assets/icons/money.svg';
import graph from '@/app/assets/icons/graph.svg';
import styles from './styles.module.scss';
import Button from '../../Button';
import clsx from 'clsx';

const ArrowIcon = () => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.arrowIcon}
  >
    <circle cx="19" cy="19" r="19" fill="var(--icon-bg-color, #FFFFFF)" />
    <path
      d="M25.7071 19.7071C26.0976 19.3166 26.0976 18.6834 25.7071 18.2929L19.3431 11.9289C18.9526 11.5384 18.3195 11.5384 17.9289 11.9289C17.5384 12.3195 17.5384 12.9526 17.9289 13.3431L23.5858 19L17.9289 24.6569C17.5384 25.0474 17.5384 25.6805 17.9289 26.0711C18.3195 26.4616 18.9526 26.4616 19.3431 26.0711L25.7071 19.7071ZM13 20L25 20L25 18L13 18L13 20Z"
      fill="var(--icon-arrow-color, #2DA5D9)"
    />
  </svg>
);

export const CardWeCanHelp = (props) => {
  const { text, bgImage, href = '/', earnWithUsBtn, openModal } = props;

  const availableImages = {
    chat: chat,
    location: location,
    peoples: peoples,
    peoples01: peoples01,
    money: money,
    graph: graph,
  };

  return (
    <a href={href} className={styles.card}>
      {!earnWithUsBtn && (
        <span className={styles.cardArrowIcon}>{ArrowIcon()}</span>
      )}

      <div className={styles.withButton}>
        <h5 className={styles.cardText}>{text}</h5>

        {earnWithUsBtn && <Button openModal={openModal}>{earnWithUsBtn}</Button>}
      </div>

      <span className={styles.cardBgImage}>
        <Image src={availableImages[bgImage]} alt="Card background" fill />
      </span>
    </a>
  );
};
