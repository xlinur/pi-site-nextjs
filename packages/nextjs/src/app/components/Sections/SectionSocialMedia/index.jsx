import styles from './styles.module.scss';
import Image from 'next/image';
import CardSocialMedia from '@/app/components/Cards/CardSocialMedia';

import emailSvg from '@/app/assets/icons/social/email.svg';
import whatsappSvg from '@/app/assets/icons/social/whatsapp.svg';
import telegramSvg from '@/app/assets/icons/social/telegram.svg';
import locationPin from '@/app/assets/icons/location-pin.svg';
import Markdown from 'react-markdown';
import clsx from 'clsx';

export default function SectionSocialMedia(props) {
  const {
    socialMediaTitle = 'Follow us on *social media*',
    withAdditionalInfo = false,
  } = props;

  return (
    <div
      className={clsx(
        styles.contactsSocialWrapper,
        withAdditionalInfo && styles.withAdditionalInfo,
      )}
    >
      {withAdditionalInfo && <AdditionalInfo />}

      <section className={styles.sectionSocialMedia}>
        <header>
          <h3>
            <Markdown>{socialMediaTitle}</Markdown>
          </h3>
        </header>

        <div className={styles.sectionSocialMediaList}>
          <CardSocialMedia socialName="instagram" />
          <CardSocialMedia socialName="linkedin" />
          <CardSocialMedia socialName="facebook" />
        </div>
      </section>
    </div>
  );
}

import getGlobalDictionary from '@/app/api/strapi/globalDictionary/route';

const AdditionalInfo = async () => {
  const { supportBlockTitle, contactsBlockTitle } = await getGlobalDictionary();

  return (
    <div className={styles.contactsBase}>
      <ul className={styles.list}>
        <li className={styles.listHeading}>
          <strong>{contactsBlockTitle}</strong>
        </li>
        <li className={styles.listItemLocation}>
          <a href="/" className={styles.workHoursWrapper}>
            <Image src={locationPin} alt="Clock icon" width={24} height={24} />
            <div className={styles.workHours}>
              Tallinn
              <br />
              Katusepapi tn 6 11412 Lasnamäe linnaosa
            </div>
          </a>
        </li>

        <li className={`h5 ${styles.linkPhone}`}>
          <a href="tel:+371-56-548-29">+ 371-56-548-29</a>
        </li>
      </ul>

      <ul className={styles.list}>
        <li className={styles.listHeading}>
          <strong>{supportBlockTitle}</strong>
        </li>
        <li>
          <a href="/" className={styles.supportOption}>
            <Image
              src={telegramSvg}
              alt="Telegram icon"
              width={24}
              height={24}
            />
            <div className={styles.supportText}>write to telegram</div>
          </a>
        </li>
        <li>
          <a href="/" className={styles.supportOption}>
            <Image
              src={whatsappSvg}
              alt="WhatsApp icon"
              width={24}
              height={24}
            />
            <div className={styles.supportText}>write to whatsapp</div>
          </a>
        </li>
        <li>
          <a href="/" className={styles.supportOption}>
            <Image src={emailSvg} alt="Email icon" width={24} height={24} />
            <div className={styles.supportText}>elena@personalinvest.org</div>
          </a>
        </li>
      </ul>

      <h4 className={styles.contactNumber}>
        <a href="tel:+371-56-548-29">+ 371-56-548-29</a>
      </h4>
    </div>
  );
};
