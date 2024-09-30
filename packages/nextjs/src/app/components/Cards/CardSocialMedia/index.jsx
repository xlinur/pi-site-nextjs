import Image from 'next/image';
import styles from './styles.module.scss';

import facebookSvg from '@/app/assets/icons/social/facebook-white.svg';
import instagramSvg from '@/app/assets/icons/social/instagram-white.svg';
import linkedinSvg from '@/app/assets/icons/social/linkedin-white.svg';

const CardSocialMedia = ({ socialName }) => {
  const SVGs = {
    instagram: instagramSvg,
    linkedin: linkedinSvg,
    facebook: facebookSvg,
  };

  return (
    <a className={styles.card} href="#">
      <span>
        <Image
          src={SVGs[socialName]}
          alt="social icon"
          width={20}
          height={20}
        />
      </span>

      <span className={styles.socialName}>{socialName}</span>
    </a>
  );
};

export default CardSocialMedia;
