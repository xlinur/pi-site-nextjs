import Image from 'next/image';

import ContactForm from '@/app/components/ContactForm';
import CardSocialMedia from '@/app/components/Cards/CardSocialMedia';

import emailSvg from '@/app/assets/icons/social/email.svg';
import whatsappSvg from '@/app/assets/icons/social/whatsapp.svg';
import telegramSvg from '@/app/assets/icons/social/telegram.svg';
import locationPin from '@/app/assets/icons/location-pin.svg';

import styles from './styles.module.scss';

export default async function PageContactUs() {
  return (
    <main className={styles.pageContactUs}>
      <div className="container">
        <h1 className="h2">Contact</h1>

        <section className={styles.sectionForm}>
          <ContactForm />
        </section>

        <div className={styles.contactsSocialWrapper}>
          <div className={styles.contactsBase}>
            <ul className={styles.list}>
              <li className={styles.listItemLocation}>
                <a href="/" className={styles.workHoursWrapper}>
                  <Image
                    src={locationPin}
                    alt="Clock icon"
                    width={24}
                    height={24}
                  />
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

          <section className={styles.sectionSocialMedia}>
            <header>
              <h3>
                Follow us on <span>social media</span>
              </h3>
            </header>

            <div className={styles.sectionSocialMediaList}>
              <CardSocialMedia socialName="instagram" />
              <CardSocialMedia socialName="linkedin" />
              <CardSocialMedia socialName="facebook" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}