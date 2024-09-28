import Image from 'next/image';
import Button from '@/app/components/Button';
import { useGetNavigation } from '@/app/components/hooks/useGetNavigation';
import logoPng from '@/app/assets/logo.png';
import emailSvg from '@/app/assets/icons/social/email.svg';
import whatsappSvg from '@/app/assets/icons/social/whatsapp.svg';
import telegramSvg from '@/app/assets/icons/social/telegram.svg';
import facebookSvg from '@/app/assets/icons/social/facebook.svg';
import instagramSvg from '@/app/assets/icons/social/instagram.svg';
import linkedinSvg from '@/app/assets/icons/social/linkedin.svg';
import clockSvg from '@/app/assets/icons/clock.svg';
import locationPin from '@/app/assets/icons/location-pin.svg';
import getGlobalDictionary from '@/app/api/strapi/globalDictionary/route';
import getGlobalSettings from '@/app/api/strapi/globalSettings/route';
import { getTimezoneOffset } from '@/utils/getTimezoneOffset';
import styles from './styles.module.scss';

const Footer = async () => {
  const { fetchMenu } = useGetNavigation();

  const { mainNav, secondaryNav } = await fetchMenu();
  const { supportBlockTitle, contactsBlockTitle } = getGlobalDictionary();
  const { contacts = {}, address, workingHours } = getGlobalSettings();

  const links = [...mainNav, ...secondaryNav].reduce((acc, item) => {
    if (item.childs) {
      return [...acc, item, ...item.childs];
    }

    return [...acc, item];
  }, []);

  const support = [
    {
      img: telegramSvg,
      link: contacts.telegram,
      name: 'Telegram',
    },
    {
      img: whatsappSvg,
      link: contacts.whatsapp,
      name: 'WhatsApp',
    },
    {
      img: emailSvg,
      link: contacts.email,
      name: contacts.email,
    },
  ];

  const socials = [
    {
      img: linkedinSvg,
      link: contacts.linkedin,
      name: 'LinkedIn',
    },
    {
      img: instagramSvg,
      link: contacts.instagram,
      name: 'Instagram',
    },
    {
      img: facebookSvg,
      link: contacts.facebook,
      name: 'Facebook',
    },
  ];

  const year = new Date();

  const time = `${workingHours} ${getTimezoneOffset()}`;

  const mok = {
    allRight: 'PersonalInvest All right reserved',
    regNo: 'PLC «Personalinvest OÜ » Reg. No. 16106367',
    policyCookies: 'Privacy Policy and our Cookies Policy Privacy',
    policyCandidates: 'Policy for candidates Terms and Conditions',
  };

  return (
    <div className={styles.footerWrapper}>
      <div className="container">
        <footer className={styles.footer}>
          <div className={styles.footerLinks}>
            {links.map((link) => (
              <Button theme="default" key={link.url}>
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
                  <a href="/" className={styles.workHoursWrapper}>
                    <Image
                      src={locationPin}
                      alt="Clock icon"
                      width={24}
                      height={24}
                    />
                    <div className={styles.workHours}>{address}</div>
                  </a>
                </li>
                <li>
                  <a href="/" className={styles.workHoursWrapper}>
                    <Image
                      src={clockSvg}
                      alt="Clock icon"
                      width={24}
                      height={24}
                    />
                    <div className={styles.workHours}>{time}</div>
                  </a>
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
              <p className={styles.footerCopyrightText}>
                ©{year.getFullYear()} {mok.allRight}
              </p>
              <p className={styles.footerCopyrightPolicies}>{mok.regNo}</p>
            </div>

            <div className={styles.footerCopyrightBlockContain}>
              <p className={styles.footerCopyrightPolicies}>
                {mok.policyCookies}
              </p>

              <p className={styles.footerCopyrightTerms}>
                {mok.policyCandidates}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
