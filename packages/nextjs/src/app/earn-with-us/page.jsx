import Image from 'next/image';
import HeroMain from '@/app/components/Sections/Heros/HeroMain';
import Advantages from '@/app/components/Advantages';
import ContactForm from '@/app/components/ContactForm';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import Button from '@/app/components/Button';

import dollarsSVG from '@/app/assets/icons/dollars.svg';

import styles from './styles.module.scss';
import SectionHowWeWork from '../core/components/Sections/SectionHowWeWork';

export default async function PageEarnWithUs() {
  const mok = {
    HeroSection: {
      title: 'Referral program for our partners',
      subtitle:
        'is the best and optimal way to monetize your social capital and network in IT. PersonalInvest offers you the opportunity to earn using the expertise of our team as a source of constant passive income.',
    },
    PaymentTermsSection: {
      title: 'Payment terms',
      items: [
        {
          title: '10% of a reward',
          text: 'Without leading the candidate. The commission is transferred according to the agreement after the candidate starts working.',
        },
        {
          title: 'Partner’s reward every 2 years',
          text: 'Full cycle of leading the candidate. 25% is paid after the candidate leaves, the second part - after the candidate completes the test period.',
        },
      ],
    },
    OurPaymentTermsTree: {
      title: 'Our transparent process of interaction',
      items: [
        {
          title: '',
          text: 'We sign a partnership agreement with you',
        },
        {
          title: '',
          text: 'You can introduce us',
        },
        {
          title: '',
          text: 'We conclude a Service Agreement with the client',
        },
        {
          title: '',
          text: 'We notify you of the closed vacancy and the amount of your reward (After the client’s payment)',
        },
        {
          title: '',
          text: 'We pay the bills for your referral',
        },
      ],
    },
  };

  return (
    <main className={styles.pageContactUs}>
      <HeroMain
        title={mok.HeroSection.title}
        subtitle={mok.HeroSection.subtitle}
        animateBg
      />

      <div className="container">
        <Advantages />
      </div>

      <div className="container">
        <div className={styles.wrapperSectionHowWeWork}>
          <SectionHowWeWork
            data={mok.OurPaymentTermsTree}
            type="horizontal"
          ></SectionHowWeWork>

          <Button size="lg">Apply now</Button>
        </div>
      </div>

      <div className="container">
        <section className={styles.paymentTermsSection}>
          <header>
            <h2>{mok.PaymentTermsSection.title}</h2>
          </header>

          <div className={styles.paymentTermsSectionGrid}>
            {mok.PaymentTermsSection.items.map((item, idx) => (
              <div className={styles.cardTerms} key={idx}>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            ))}
            <div className={styles.cardContact}>
              <Image
                src={dollarsSVG}
                alt="Icon dollars"
                width={148}
                height={148}
              />

              <Button size="lg">Contact</Button>
            </div>
          </div>
        </section>
      </div>

      {/* @Component SectionWeCanHelp */}
      <div className={styles.sectionHelpWrapper}>
        <div className="container">
          <SectionWeCanHelp />
        </div>
      </div>

      {/* @Component SectionContactForm */}
      <div className={styles.sectionFormWrapper}>
        <div className="container">
          <section className={styles.sectionForm}>
            <ContactForm />
          </section>
        </div>
      </div>
    </main>
  );
}
