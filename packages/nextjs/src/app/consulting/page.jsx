import HeroMain from '@/app/components/Sections/Heros/HeroMain';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import Accordion from '@/app/components/Accordion';
import ContactForm from '@/app/components/ContactForm';
import Button from '@/app/components/Button';
import peopleSVG from '@/app/assets/icons/iconPeople.svg';

import styles from './styles.module.scss';
import Markdown from 'react-markdown';
import Image from 'next/image';
import homePageRequest from '@/app/api/strapi/homePage/route';

export default async function RelocationHelpPage() {
  const { WhyPersonalInvest, WhyPersonalInvestItems } = await homePageRequest();
  const mok = {
    HeroSection: {
      title: 'IT recruitment',
      subtitle:
        'Use the full potential of talent acquisition with PersonalInvest to maximize the benefits of our permanent or contract recruitment services and your business growth.',
      actions: [],
    },

    HowWeWork: {
      title: '',
      items: [
        {
          text: 'Developing and conducting of personnel assessments including Top Management',
        },
        {
          text: 'Implementing changes in corporate culture and train your recruiters',
        },
        {
          text: "Formation of a personnel reserve to secure the company's sustainable development",
        },
        {
          text: 'Solving management cases',
        },
        {
          text: 'Development of a motivation system to encourage the desired employee behavior.',
        },
        {
          text: 'Providing reviews of IT market capacity and salaries.',
        },
      ],
    },
    ExamplesBestPractices: {
      title: 'Examples of best practices',
      items: [
        {
          title: 'Training of young recruiters without IT experience',
          content: {
            title: 'Training of young recruiters without IT experience',
            items: [
              {
                title: 'Solution:',
                text: 'Conducted an internal 48-hour training on the specifics of IT recruiting for two novice recruiters.',
              },
              {
                title: 'Result:',
                text: 'Partner recruiters have completed their annual hiring plan.',
              },
            ],
          },
        },
        {
          title: 'Training of young recruiters without IT experience',
          content: {
            title: 'Training of young recruiters without IT experience',
            items: [
              {
                title: 'Solution:',
                text: 'Conducted an internal 48-hour training on the specifics of IT recruiting for two novice recruiters.',
              },
              {
                title: 'Solution:',
                text: 'Conducted an internal 48-hour training on the specifics of IT recruiting for two novice recruiters.',
              },
            ],
          },
        },
      ],
    },
  };

  return (
    <main className={styles.relocationHelpPage}>
      <HeroMain
        title={mok.HeroSection.title}
        subtitle={mok.HeroSection.subtitle}
        animateBg
      />

      {/* @Component */}
      <div className="container">
        <section className={styles.sectionHowWeWork}>
          <header>
            <h4>Our services</h4>
          </header>

          {mok.HowWeWork.items.map((item, idx) => (
            <div className={styles.howWeWorkCard} key={idx}>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.6666 22.4666V23.9999C40.6645 27.594 39.5008 31.0911 37.3488 33.9696C35.1969 36.8482 32.1721 38.9541 28.7255 39.9731C25.279 40.9921 21.5954 40.8698 18.224 39.6242C14.8527 38.3787 11.9743 36.0768 10.0182 33.0617C8.06203 30.0467 7.1329 26.48 7.36938 22.8938C7.60586 19.3075 8.99526 15.8938 11.3304 13.1617C13.6655 10.4296 16.8212 8.52557 20.3269 7.73351C23.8326 6.94145 27.5004 7.30383 30.7833 8.7666"
                    stroke="#2DA5D9"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40.6667 10.6667L24 27.3501L19 22.3501"
                    stroke="#2DA5D9"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <div>
                <Markdown>{item.text}</Markdown>

                {item.link && <Button>{item.link.title}</Button>}
              </div>
            </div>
          ))}

          <Button>Order consultation</Button>
        </section>
      </div>

      {/* @Component */}
      <div className={styles.sectionWhyWrapper}>
        <div className="container">
          <section className={styles.sectionWhy}>
            <h2>{WhyPersonalInvest.title}</h2>

            <div className={styles.reasons}>
              {WhyPersonalInvestItems.map(({ title, description }) => (
                <div className={styles.reasonsItem} key={title}>
                  <h5 className={styles.reasonsItemTitle}>{title}</h5>
                  <p className={styles.reasonsItemText}>{description}</p>
                </div>
              ))}
              <div className={styles.reasonsItem}>
                <div className={styles.reasonsItemTitle}></div>
                <div className={styles.reasonsItemText}>
                  <Button theme="primary">Find the best tech talents</Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="container">
        <section className={styles.sectionAccordion}>
          <header>
            <h2>{mok.ExamplesBestPractices.title}</h2>
          </header>

          <div className={styles.sectionAccordionContent}>
            <Accordion data={mok.ExamplesBestPractices}></Accordion>

            <div className={styles.sectionAccordionContentImage}>
              <Image src={peopleSVG} alt="some" fill />

              <Button size="lg">Contact</Button>
            </div>
          </div>
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
