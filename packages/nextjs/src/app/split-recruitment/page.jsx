import Image from 'next/image';
import Markdown from 'react-markdown';
import SectionPointsAboutUs from '@/app/components/Sections/SectionPointsAboutUs';
import SectionUsInNumbers from '@/app/components/Sections/SectionUsInNumbers';
import HeroMain from '@/app/components/Sections/Heros/HeroMain';
import ContactForm from '@/app/components/ContactForm';

import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';

import Button from '@/app/components/Button';
import dollarsSVG from '@/app/assets/icons/dollars.svg';

import styles from './styles.module.scss';

export default async function PageSplitRecruitment() {
  const mok = {
    HeroSection: {
      title: '# *Split fee recruitment* for our partners',
      subtitle: `Split fee recruiting represents an agreed-upon arrangement between two recruiters (f.e. you and PersonalInvest) in which one recruiter supplies the job order and one supplies the candidate in a potential placement situation.
            
After the placement is made and the candidate is working for their new employer, the two recruiters split the placement fee.`,
      actions: [],
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
    ProposalSection: {
      title: '## *Proposal* from PersonalInvest',
      text: 'Personalinvest invites IT companies that have recruiters on staff to join our split fee recruitment program on mutually beneficial terms. Your business will get the additional source of income and reduce labor costs for full-time recruiters.',
      link: {
        title: 'Need a consultation',
        url: '#',
      },
      directions: {
        title: 'Our program has two directions:',
        items: [
          {
            title: 'Active Recruitment',
            text: 'for our active positions',
          },
          {
            title: 'Sending CVs and Candidates Summaries',
            text: 'from your active pool',
          },
        ],
      },
    },
    HowWeWork: {
      title: 'How we work',
      items: [
        {
          title: '',
          text: 'Online meet-up to determine the format of cooperation and domains/ stacks for your recruiters.',
        },
        {
          title: '',
          text: 'We sign the NDA and Services agreement',
        },
        {
          title: '',
          text: 'We send you the list of current vacancies',
        },
        {
          title: '',
          text: 'We send you the list of current vacancies',
        },
        {
          title: '',
          text: 'We assign you to our Teamlead',
        },
        {
          title: '',
          text: 'You send us relevant CVs with HR summaries',
        },
        {
          title: '',
          text: 'We give you feedback',
        },
        {
          title: '',
          text: 'We pay you for your services during 5 days after getting payment from the client for the closed vacancy',
        },
      ],
    },
  };

  return (
    <main className={styles.pageRecruitment}>
      <HeroMain
        title={mok.HeroSection.title}
        subtitle={mok.HeroSection.subtitle}
        animateBg
      />

      <div className="container">
        <section className={styles.sectionAboutWrapper}>
          <h2>About PersonalInvest</h2>

          <div className={styles.firstBlock}>
            <SectionUsInNumbers />
            <SectionPointsAboutUs />
          </div>
        </section>
      </div>

      <div className="container">
        <section className={styles.sectionProposal}>
          <article className={styles.cardProposalArticle}>
            <header>
              <Markdown>{mok.ProposalSection.title}</Markdown>
              <Markdown>{mok.ProposalSection.text}</Markdown>
            </header>

            <Button size="lg">{mok.ProposalSection.link.title}</Button>
          </article>

          <div className={styles.directionsWrapper}>
            <div className={styles.directionsCardTitle}>
              <h5>{mok.ProposalSection.directions.title}</h5>
            </div>

            {mok.ProposalSection.directions.items.map((item, idx) => (
              <div className={styles.directionsCardItem} key={idx}>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
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

      <div className="container">
        <SectionHowWeWork data={mok.HowWeWork} fitContent />
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
