import Image from "next/image";
import { redirect } from "next/navigation";
import { AppDB } from "@/app/core/db/app.db";
import Button from "@/app/core/components/Button";
import logoPng from "@/app/assets/logo.png";
import emailSvg from "@/app/assets/icons/social/email.svg";
import whatsappSvg from "@/app/assets/icons/social/whatsapp.svg";
import telegramSvg from "@/app/assets/icons/social/telegram.svg";
import facebookSvg from "@/app/assets/icons/social/facebook.svg";
import instagramSvg from "@/app/assets/icons/social/instagram.svg";
import linkedinSvg from "@/app/assets/icons/social/linkedin.svg";
import clockSvg from "@/app/assets/icons/clock.svg";
import locationPin from "@/app/assets/icons/location-pin.svg";
import styles from "./styles.module.scss";

const Footer = () => {
    const year = new Date();

    return (
        <div className={styles.footerWrapper}>
            <div className="container">
                <footer className={styles.footer}>
                    <div className={styles.footerLinks}>
                        {Object.entries(AppDB.ROUTS).map(([key, link]) => (
                            <Button
                                theme="default"
                                key={key}
                                onClick={() => redirect(link.href)}
                            >
                                {link.label}
                            </Button>
                        ))}
                    </div>

                    <div className={styles.footerContent}>
                        <div className={styles.footerContentLogo}>
                            <a href="/">
                                <Image
                                    src={logoPng}
                                    alt="Logo"
                                    width="68"
                                    height="99"
                                />
                            </a>
                        </div>

                        <div className={styles.listWrapper}>
                            <p className={styles.listTitle}>Support</p>
                            <ul className={styles.list}>
                                <li>
                                    <a
                                        href="/"
                                        className={styles.supportOption}
                                    >
                                        <Image
                                            src={telegramSvg}
                                            alt="Telegram icon"
                                            width={24}
                                            height={24}
                                        />
                                        <div className={styles.supportText}>
                                            write to telegram
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className={styles.supportOption}
                                    >
                                        <Image
                                            src={whatsappSvg}
                                            alt="WhatsApp icon"
                                            width={24}
                                            height={24}
                                        />
                                        <div className={styles.supportText}>
                                            write to whatsapp
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className={styles.supportOption}
                                    >
                                        <Image
                                            src={emailSvg}
                                            alt="Email icon"
                                            width={24}
                                            height={24}
                                        />
                                        <div className={styles.supportText}>
                                            elena@personalinvest.org
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.listWrapper}>
                            <p className={styles.listTitle}>Contacts</p>
                            <ul className={styles.list}>
                                <li className={styles.listItemLocation}>
                                    <a
                                        href="/"
                                        className={styles.workHoursWrapper}
                                    >
                                        <Image
                                            src={locationPin}
                                            alt="Clock icon"
                                            width={24}
                                            height={24}
                                        />
                                        <div className={styles.workHours}>
                                            Tallinn
                                            <br />
                                            Katusepapi tn 6 11412 Lasnamäe
                                            linnaosa
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className={styles.workHoursWrapper}
                                    >
                                        <Image
                                            src={clockSvg}
                                            alt="Clock icon"
                                            width={24}
                                            height={24}
                                        />
                                        <div className={styles.workHours}>
                                            9:00 - 20:00 UTS +2
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.footerContentPhone}>
                            <h5>+ 371-56-548-29</h5>

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
                    </div>

                    <hr className={styles.footerLine} />

                    <div className={styles.footerCopyright}>
                        <div className={styles.footerCopyrightBlock}>
                            <p className={styles.footerCopyrightText}>
                                ©{year.getFullYear()} PersonalInvest All right
                                reserved
                            </p>
                            <p className={styles.footerCopyrightPolicies}>
                                PLC «Personalinvest OÜ » Reg. No. 16106367
                            </p>
                        </div>

                        <div className={styles.footerCopyrightBlockContain}>
                            <p className={styles.footerCopyrightPolicies}>
                                Privacy Policy and our Cookies Policy Privacy
                            </p>

                            <p className={styles.footerCopyrightTerms}>
                                Policy for candidates Terms and Conditions
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
