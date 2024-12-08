import Markdown from '@/app/components/Markdown';
import Image from 'next/image';
import clsx from 'clsx';

import CardSocialMedia from '@/app/components/Cards/CardSocialMedia';
import locationPin from '@/app/assets/icons/location-pin.svg';
import fetchWrapper from '@/app/utils/fetchWrapper';
import { createSocialsData } from '@/app/utils/createSocialsData';
import { createSupportData } from '@/app/utils/createSupportData';

import styles from './styles.module.scss';

export default async function SectionSocialMedia(props) {
  const { withAdditionalInfo = false } = props;

  const [dictionaryData, settingsData] = await Promise.all([
    fetchWrapper('/api/global-dictionary?populate=deep'),
    fetchWrapper('/api/global?populate=deep'),
  ]);

  const { contacts, address } = settingsData.data.attributes;
  const { followSocialMediaTitle, ...restDictionaryData } =
    dictionaryData.data.attributes;

  const support = createSupportData({ contacts });
  const socials = createSocialsData({ contacts });

  return (
    <div
      className={clsx(
        styles.contactsSocialWrapper,
        withAdditionalInfo && styles.withAdditionalInfo,
      )}
    >
      {withAdditionalInfo && (
        <AdditionalInfo
          {...restDictionaryData}
          support={support}
          contacts={contacts}
          address={address}
        />
      )}

      <section className={styles.sectionSocialMedia}>
        <header>
          <h3>
            <Markdown>{followSocialMediaTitle}</Markdown>
          </h3>
        </header>

        <div className={styles.sectionSocialMediaList}>
          {socials.map((item, idx) => (
            <CardSocialMedia {...item} key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}

const AdditionalInfo = ({
  supportBlockTitle,
  contactsBlockTitle,
  support,
  address,
  contacts,
}) => {
  return (
    <div className={styles.contactsBase}>
      <div className={styles.listWrapper}>
        <p className={styles.listTitle}>{contactsBlockTitle}</p>
        <ul className={styles.list}>
          <li className={styles.listItemLocation}>
            <span className={styles.workHoursWrapper}>
              <Image
                src={locationPin}
                alt="Clock icon"
                width={24}
                height={24}
              />
              <div className={styles.workHours}>{address}</div>
            </span>
          </li>
          <li className={`h5 ${styles.linkPhone}`}>
            <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
          </li>
        </ul>
      </div>

      <div className={styles.listWrapper}>
        <p className={styles.listTitle}>{supportBlockTitle}</p>
        <ul className={styles.list}>
          {support.map((item) => (
            <li key={item.link}>
              <a href={item.link} className={styles.supportOption}>
                <Image src={item.img} alt={item.name} width={24} height={24} />
                <div className={styles.supportText}>{item.name}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <h4 className={styles.contactNumber}>
        <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
      </h4>
    </div>
  );
};
