import Markdown from 'react-markdown';
import Image from 'next/image';
import { createSocialsData } from '@/app/utils/createSocialsData';
import getGlobalSettings from '@/app/api/strapi/globalSettings/route';

import styles from './styles.module.scss';

export default async function SectionOurFounder(props) {
  const { title, photo, name, position, li, fb, email, text, description } =
    props;

  const { contacts } = await getGlobalSettings();
  const socials = createSocialsData({ contacts });

  return (
    <section className={styles.sectionFounder}>
      {title && <h3>{title}</h3>}

      <div className={styles.cardFounder}>
        <div className={styles.cardFounderInfo}>
          <div className={styles.wrap}>
            <div className={styles.cardFounderInfoImage}>
              <img
                src={photo.data.attributes.url}
                alt={photo.data.attributes.alternativeText}
                width={171}
                height={171}
              />
            </div>

            <h5 className={styles.cardFounderInfoName}>{name}</h5>

            <p className={styles.cardFounderInfoPosition}>{position}</p>
          </div>

          <div className={styles.cardFounderInfoSocial}>
            {socials.map((item) => (
              <a href={item.link} key={item.link}>
                <Image src={item.img} alt={item.name} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.cardFounderContent}>
          <div className={`h5 ${styles.cardFounderContentText}`}>{text}</div>

          <div className={styles.cardFounderContentExperience}>
            <Markdown>{description}</Markdown>
          </div>
        </div>
      </div>
    </section>
  );
}