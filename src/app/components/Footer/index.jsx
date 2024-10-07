import Markdown from 'react-markdown';
import Image from 'next/image';
import Button from '@/app/components/Button';
import { createNavigation } from '@/app/utils/createNavigation';
import logoPng from '@/app/assets/logo.png';
import clockSvg from '@/app/assets/icons/clock.svg';
import locationPin from '@/app/assets/icons/location-pin.svg';
import { createSocialsData } from '@/app/utils/createSocialsData';
import { createSupportData } from '@/app/utils/createSupportData';
import { createWorkingHours } from '@/app/utils/createWorkingHours';
import fetchWrapper from '@/app/utils/fetchWrapper';
import styles from './styles.module.scss';

const Footer = async () => {
  const [dictionaryData, settingsData, spheresData] = await Promise.all([
    fetchWrapper('/api/global-dictionary?populate=deep'),
    fetchWrapper('/api/global?populate=deep'),
    fetchWrapper('/api/spheres?populate=deep'),
  ]);

  const { mainNav, secondaryNav } = createNavigation(
    dictionaryData,
    spheresData,
  );

  const { supportBlockTitle, contactsBlockTitle } =
    dictionaryData.data.attributes;
  const {
    contacts,
    address,
    workingHours,
    copyright,
    registration,
    privacyPolicy,
    candidatePolicy,
  } = settingsData.data.attributes;

  const links = [...mainNav, ...secondaryNav].reduce((acc, item) => {
    if (item.childs) {
      return [...acc, ...item.childs];
    }

    return [...acc, item];
  }, []);

  const support = createSupportData({ contacts });
  const socials = createSocialsData({ contacts });
  const time = createWorkingHours(workingHours);

  return (
    <div className={styles.footerWrapper}>
      <div className="container">
        <footer className={styles.footer}>
          <div className={styles.footerLinks}>
            {links.map((link) => (
              <Button theme="default" key={link.url} url={link.url}>
                {link.title}
              </Button>
            ))}
          </div>

          <div className={styles.footerContent}>
            <div className={styles.footerContentLogo}>
              <a href="/">
                <Image src={logoPng} alt="Logo" width="68" height="99" />
              </a>
            </div>

            <div className={styles.listWrapper}>
              <p className={styles.listTitle}>{supportBlockTitle}</p>
              <ul className={styles.list}>
                {support.map((item) => (
                  <li key={item.link}>
                    <a href={item.link} className={styles.supportOption}>
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={24}
                        height={24}
                      />
                      <div className={styles.supportText}>{item.name}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

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
                <li>
                  <span className={styles.workHoursWrapper}>
                    <Image
                      src={clockSvg}
                      alt="Clock icon"
                      width={24}
                      height={24}
                    />
                    <div className={styles.workHours}>{time}</div>
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.footerContentPhone}>
              <h5>{contacts.phone}</h5>

              <div className={styles.socialMedia}>
                {socials.map((item) => (
                  <a href={item.link} key={item.link}>
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <hr className={styles.footerLine} />

          <div className={styles.footerCopyright}>
            <div className={styles.footerCopyrightBlock}>
              <p className={styles.footerCopyrightText}>{copyright}</p>
              <p>{registration}</p>
            </div>

            <div className={styles.footerCopyrightBlockContain}>
              <Markdown className={styles.footerCopyrightPolicies}>
                {privacyPolicy}
              </Markdown>

              <Markdown className={styles.footerCopyrightTerms}>
                {candidatePolicy}
              </Markdown>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
