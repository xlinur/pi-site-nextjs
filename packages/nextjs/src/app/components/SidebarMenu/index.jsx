import Image from 'next/image';
import crossSvg from '@/app/assets/icons/cross.svg';
import clockSvg from '@/app/assets/icons/clock.svg';
import facebookSvg from '@/app/assets/icons/social/facebook.svg';
import instagramSvg from '@/app/assets/icons/social/instagram.svg';
import emailSvg from '@/app/assets/icons/social/email.svg';
import linkedinSvg from '@/app/assets/icons/social/linkedin.svg';
import whatsappSvg from '@/app/assets/icons/social/whatsapp.svg';
import telegramSvg from '@/app/assets/icons/social/telegram.svg';
import { getTimezoneOffset } from '@/utils/getTimezoneOffset';
import styles from './styles.module.scss';

import { globalSettings } from './__mocks';

export const SidebarMenu = ({ isOpen, onClose, mainNav, secondaryNav }) => {
  const handleCloseSidebar = () => {
    onClose(false);
  };

  if (!isOpen) {
    return null;
  }

  const renderMenu = (menu) =>
    menu.map(({ title, url, childs }) => {
      if (childs?.length) {
        return (
          <div className={styles.menuItem} key={url}>
            {/* change class name servicesWrapper to more generic one */}
            <div className={styles.servicesWrapper}>
              {/* DROPDOWN */}
              <a href={url}>{title}</a>
              {/* Caret down icon */}
            </div>
          </div>
        );
      }

      return (
        <a href={url} className={styles.menuItem} key={url}>
          {title}
        </a>
      );
    });

  const workingHours = `${globalSettings.time} ${getTimezoneOffset()}`;

  return (
    <div className={styles.sidebar}>
      <div className={styles.menuList}>
        <div className={styles.menuColumn}>{renderMenu(mainNav)}</div>
        <div className={styles.menuColumn}>{renderMenu(secondaryNav)}</div>
      </div>

      <div className={styles.contactSection}>
        <div className={styles.line} />
        <div className={styles.contactInfo}>
          <div className={styles.phoneSection}>
            <div className={styles.phoneInfo}>
              <div className={styles.phoneNumber}>{globalSettings.phone}</div>
              <div className={styles.workHoursWrapper}>
                <Image src={clockSvg} alt="Clock icon" width={24} height={24} />
                <div className={styles.workHours}>{workingHours}</div>
              </div>
            </div>
            <div className={styles.socialMedia}>
              <a href={globalSettings.socials.li}>
                <Image
                  src={linkedinSvg}
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
              <a href={globalSettings.socials.in}>
                <Image
                  src={instagramSvg}
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a href={globalSettings.socials.fb}>
                <Image
                  src={facebookSvg}
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
          <div className={styles.supportSection}>
            <div className={styles.supportTitle}>
              {globalSettings.supportTitle}
            </div>
            <div className={styles.supportOptions}>
              <div className={styles.supportOption}>
                <Image
                  src={telegramSvg}
                  alt="Telegram icon"
                  width={24}
                  height={24}
                />
                <div className={styles.supportText}>
                  {globalSettings.contacts.tg}
                </div>
              </div>
              <div className={styles.supportOption}>
                <Image
                  src={whatsappSvg}
                  alt="WhatsApp icon"
                  width={24}
                  height={24}
                />
                <div className={styles.supportText}>
                  {globalSettings.contacts.wp}
                </div>
              </div>
              <div className={styles.supportOption}>
                <Image src={emailSvg} alt="Email icon" width={24} height={24} />
                <div className={styles.supportText}>
                  {globalSettings.contacts.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleCloseSidebar}
        className={styles.closeButton}
      >
        <Image
          src={crossSvg}
          alt="Button close sidebar"
          width={40}
          height={40}
        />
      </button>
    </div>
  );
};

export default SidebarMenu;
