import crossSvg from "@/app/assets/icons/cross.svg";
import clockSvg from "@/app/assets/icons/clock.svg";
import facebookSvg from "@/app/assets/icons/social/facebook.svg";
import instagramSvg from "@/app/assets/icons/social/instagram.svg";
import emailSvg from "@/app/assets/icons/social/email.svg";
import linkedinSvg from "@/app/assets/icons/social/linkedin.svg";
import whatsappSvg from "@/app/assets/icons/social/whatsapp.svg";
import telegramSvg from "@/app/assets/icons/social/telegram.svg";
import styles from "./styles.module.scss";
import Image from "next/image";

export const SidebarMenu = ({ setIsOpenSidebar }) => {
    const handleCloseSidebar = () => setIsOpenSidebar((prop) => !prop);
    return (
        <div className={styles.sidebar}>
            <div className={styles.menuList}>
                {/* TODO: рендер из списка AppDB */}
                <div className={styles.menuColumn}>
                    <div className={styles.menuItem}>About us</div>
                    <div className={styles.menuItem}>
                        <div className={styles.servicesWrapper}>
                            {/* DROPDOWN */}
                            <div>Services</div>
                            {/* Caret down icon */}
                        </div>
                    </div>
                    <div className={styles.menuItem}>Industries</div>
                    <div className={styles.menuItem}>Vacancies</div>
                    <div className={styles.menuItem}>Earn with us</div>
                    <div className={styles.menuItem}>Contact</div>
                </div>
                <div className={styles.menuColumn}>
                    <div className={styles.menuItem}>Reviews</div>
                    <div className={styles.menuItem}>Split recruitment</div>
                    <div className={styles.menuItem}>Cases</div>
                    <div className={styles.menuItem}>GameDev</div>
                    <div className={styles.menuItem}>Gambling (iGaming)</div>
                    <div className={styles.menuItem}>Blockchain</div>
                    <div className={styles.menuItem}>SaaS</div>
                    <div className={styles.menuItem}>FinTech (trading)</div>
                    <div className={styles.menuItem}>Cryptocurrency</div>
                    <div className={styles.menuItem}>AI</div>
                </div>
            </div>

            <div className={styles.contactSection}>
                <div className={styles.line} />
                <div className={styles.contactInfo}>
                    <div className={styles.phoneSection}>
                        <div className={styles.phoneInfo}>
                            <div className={styles.phoneNumber}>
                                + 371-56-548-29
                            </div>
                            <div className={styles.workHoursWrapper}>
                                <Image
                                    src={clockSvg}
                                    alt="Clock icon"
                                    width={24}
                                    height={24}
                                />
                                <div className={styles.workHours}>
                                    9:00 - 20:00 UTS +2
                                </div>
                            </div>
                        </div>
                        <div className={styles.socialMedia}>
                            <a href="#">
                                <Image
                                    src={linkedinSvg}
                                    alt="LinkedIn icon"
                                    width={24}
                                    height={24}
                                />
                            </a>
                            <a href="#">
                                <Image
                                    src={instagramSvg}
                                    alt="Instagram icon"
                                    width={24}
                                    height={24}
                                />
                            </a>
                            <a href="#">
                                <Image
                                    src={facebookSvg}
                                    alt="Facebook icon"
                                    width={24}
                                    height={24}
                                />
                            </a>
                        </div>
                    </div>
                    <div className={styles.supportSection}>
                        <div className={styles.supportTitle}>Support</div>
                        <div className={styles.supportOptions}>
                            <div className={styles.supportOption}>
                                <Image
                                    src={telegramSvg}
                                    alt="Telegram icon"
                                    width={24}
                                    height={24}
                                />
                                <div className={styles.supportText}>
                                    write to telegram
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
                                    write to whatsapp
                                </div>
                            </div>
                            <div className={styles.supportOption}>
                                <Image
                                    src={emailSvg}
                                    alt="Email icon"
                                    width={24}
                                    height={24}
                                />
                                <div className={styles.supportText}>
                                    elena@personalinvest.org
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
