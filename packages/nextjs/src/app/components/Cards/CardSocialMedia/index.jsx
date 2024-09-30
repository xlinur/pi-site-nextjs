import Image from 'next/image';
import styles from './styles.module.scss';

const CardSocialMedia = ({ imgWhite, link, name }) => {
  return (
    <a className={styles.card} href={link}>
      <span>
        <Image
          src={imgWhite}
          alt="social icon"
          width={20}
          height={20}
        />
      </span>

      <span className={styles.socialName}>{name}</span>
    </a>
  );
};

export default CardSocialMedia;
