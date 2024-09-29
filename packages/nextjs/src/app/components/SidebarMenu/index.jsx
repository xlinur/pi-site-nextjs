import Image from 'next/image';
import crossSvg from '@/app/assets/icons/cross.svg';
import clockSvg from '@/app/assets/icons/clock.svg';
import { createSocialsData } from '@/app/utils/createSocialsData';
import { createSupportData } from '@/app/utils/createSupportData';
import { createWorkingHours } from '@/app/utils/createWorkingHours';
import styles from './styles.module.scss';

export const SidebarMenu = ({
  isOpen,
  onClose,
  mainNav,
  secondaryNav,
  globalDictionary,
  globalSettings,
}) => {
  const { supportBlockTitle } = globalDictionary;
  const { contacts, workingHours } = globalSettings;

  const handleCloseSidebar = () => {
    onClose(false);
  };

  if (!isOpen) {
    return null;
  }

  const support = createSupportData({ contacts });
  const socials = createSocialsData({ contacts });
  const time = createWorkingHours(workingHours);

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
              <div className={styles.phoneNumber}>{contacts.phone}</div>
              <div className={styles.workHoursWrapper}>
                <Image src={clockSvg} alt="Clock icon" width={24} height={24} />
                <div className={styles.workHours}>{time}</div>
              </div>
            </div>
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
          <div className={styles.supportSection}>
            <div className={styles.supportTitle}>{supportBlockTitle}</div>
            <div className={styles.supportOptions}>
              {support.map((item) => (
                <div className={styles.supportOption} key={item.link}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                  <a href={item.link} className={styles.supportText}>
                    {item.name}
                  </a>
                </div>
              ))}
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
