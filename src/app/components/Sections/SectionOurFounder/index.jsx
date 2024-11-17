import Markdown from '@/app/components/Markdown';
import Image from 'next/image';
import emailSvg from '@/app/assets/icons/social/email.svg';
import { createSocialsData } from '@/app/utils/createSocialsData';

import styles from './styles.module.scss';
import { Tsukimi_Rounded } from 'next/font/google';

const tsukimi = Tsukimi_Rounded({
  subsets: ['latin'],
  weight: ['400'],
});

export default async function SectionOurFounder(props) {
  const { title, photo, name, position, text, description, li, fb, email } =
    props;

  const socials = createSocialsData({
    contacts: { linkedin: li, facebook: fb },
  });

  return (
    <section className={styles.sectionFounder}>
      {title && <h3>{title}</h3>}

      <div className={styles.cardFounder}>
        <div className={styles.cardFounderInfo}>
          <div className={styles.wrap}>
            <div className={styles.cardFounderInfoImage}>
              <Image
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
            {socials.map((item, id) => (
              <a href={item.link} key={item?.link + `_${id}`}>
                <Image src={item.img} alt={item.name} width={24} height={24} />
              </a>
            ))}
            {email && (
              <a className={styles.socialEmail} href={`mailto:${email}`}>
                <Image src={emailSvg} alt={email} width={24} height={24} />
              </a>
            )}
          </div>
        </div>
        <div className={styles.cardFounderContent}>
          <div className={`h5 ${styles.cardFounderContentText}`}>
            <span className={tsukimi.className}>“</span>
            <blockquote>
              <Markdown>{text}</Markdown>
            </blockquote>
          </div>

          <div className={styles.cardFounderContentExperience}>
            <Markdown>{description}</Markdown>
          </div>
        </div>
      </div>
    </section>
  );
}
