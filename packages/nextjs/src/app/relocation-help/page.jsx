import HeroMain from '@/app/components/Sections/Heros/HeroMain';
import SectionInfoWithCards from '@/app/components/Sections/SectionInfoWithCards';
import SectionCustomVision from '@/app/components/Sections/SectionCustomVision';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionCompaniesLogo from '@/app/components/Sections/SectionCompaniesLogo';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import ContactForm from '@/app/components/ContactForm';
import Button from '@/app/components/Button';
import chatSVG from '@/app/assets/icons/chat-white.svg';

import styles from './styles.module.scss';
import Markdown from 'react-markdown';
import Image from 'next/image';

export default function RelocationHelpPage() {
  const mok = {
    PersonnelRecruitmentSection: {
      title: 'Assistance in relocation planning',
      subtitle:
        'Our company provides a comprehensive service, within the framework of which we will undertake:',
      items: [
        {
          text: 'Market salary',
          url: '#',
        },
        {
          text: 'Assistance with relocation (assistance with visa and documents, compensation for air tickets, payment for housing for 1-2 months and payment of organizational costs for the candidate and his family)',
          url: '#',
        },
        {
          text: 'Medical insurance',
          url: '#',
        },
        {
          text: 'Ability to work from the office or remotely',
          url: '#',
        },
        {
          text: 'Various amenities in the form of courses in Spanish and English',
          url: '#',
        },
      ],
    },
    HowWeWork: {
      title: '',
      items: [
        {
          text: 'We carry out a full analysis of the Customer’s situation',
        },
        {
          text: 'We select options of countries with the possibility of legalization',
        },
        {
          text: 'We organize screening of the labor market in specified locations',
        },
        {
          text: 'We help you find consultants on the local services market who will guide you from the first to the last step of relocation and legalization.',
        },
        {
          text: 'We undertake step-by-step planning of all stages of relocation.',
          link: {
            url: '#',
            title: 'Contact',
          },
        },
      ],
    },
  };

  return (
    <main className={styles.relocationHelpPage}>
      {/* @Component listLink */}
      <div className="container">
        <section className={styles.sectionPersonnelRecruitment}>
          <header>
            <h1>{mok.PersonnelRecruitmentSection.title}</h1>
            <p>{mok.PersonnelRecruitmentSection.subtitle}</p>
          </header>

          <div className={styles.content}>
            <div className={styles.contentList}>
              {mok.PersonnelRecruitmentSection.items.map((item, idx) => (
                <a href={item.url} className={styles.item} key={idx}>
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0321 19.0311C18.5844 19.0311 19.0321 18.5834 19.0321 18.0311L19.0321 9.0311C19.0321 8.47882 18.5844 8.0311 18.0321 8.0311C17.4798 8.0311 17.0321 8.47882 17.0321 9.0311L17.0321 17.0311L9.03208 17.0311C8.4798 17.0311 8.03208 17.4788 8.03208 18.0311C8.03208 18.5834 8.4798 19.0311 9.03208 19.0311L18.0321 19.0311ZM9.5468 10.96L17.325 18.7382L18.7392 17.324L10.961 9.54582L9.5468 10.96Z"
                      fill="currentColor"
                    />
                  </svg>

                  <p>{item.text}</p>
                </a>
              ))}
            </div>

            <div className={styles.contentFooter}>
              <p>
                And based on the findings, we will help you make the right
                choice.
              </p>
              <Button icon>Contact us</Button>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <section className={styles.sectionHowWeWork}>
          <header>
            <h4>How we are working:</h4>
          </header>

          {mok.HowWeWork.items.map((item, idx) => (
            <div className={styles.howWeWorkCard} key={idx}>
              <span>{idx + 1}</span>

              <div>
                <Markdown>{item.text}</Markdown>

                {item.link && <Button>{item.link.title}</Button>}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* @Component SectionFeedbackList */}
      <div className={styles.sectionFeedbackWrapper}>
        <SectionFeedbackList firstSlideTheme="white" />
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
