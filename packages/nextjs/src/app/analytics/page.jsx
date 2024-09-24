import HeroMain from '@/app/components/Sections/Heros/HeroMain';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import ContactForm from '@/app/components/ContactForm';
import Button from '@/app/components/Button';

import styles from './styles.module.scss';
import homePageRequest from '@/app/api/strapi/homePage/route';
import Markdown from 'react-markdown';

export default async function SpheresPage() {
  const { WhyPersonalInvest, WhyPersonalInvestItems } = await homePageRequest();

  const mok = {
    HeroSection: {
      title: '# IT market research and analytics',
      subtitle:
        'We help organizations explore new market trends, implement new promising HR strategies, and create cutting-edge business models. Using our research and analytics you will manage to transform your organizational capabilities, putting you at the forefront of innovation in your industry.',
      actions: [],
    },
    Pricing: {
      title: 'Pricing',
      items: [
        {
          title: 'Usual fee is 100%',
          subtitle: 'Gross of the candidate’s monthly salary',
          link: {
            title: 'Contact',
            url: '#',
          },
        },
        {
          title: 'Split-recruitment',
          subtitle:
            'Agreed arrangement between us and your recruiters under NDA with 25% or 50% profit scheme.',
          link: {
            title: 'More info ',
            url: '#',
          },
        },
        {
          title: 'Subscription model',
          subtitle:
            "Paying for a subscription per month at the price of one senior recruiter's salary will open up unlimited opportunities for you to work with 65 recruiters of our company.",
          link: {
            title: 'Contact',
            url: '#',
          },
        },
      ],
    },
    CasesList: {
      items: [
        {
          date: 'January 5, 2024',
          title: 'A succefull story from GameDev ',
          subtitle: 'How we closed a position in 3 days ',
          url: 'cases/case',
        },
        {
          date: 'January 5, 2024',
          title: 'A succefull story from GameDev ',
          subtitle: 'How we closed a position in 3 days ',
          url: 'cases/case',
        },
        {
          date: 'January 5, 2024',
          title: 'A succefull story from GameDev ',
          subtitle: 'How we closed a position in 3 days ',
          url: 'cases/case',
        },
        {
          date: 'January 5, 2024',
          title: 'A succefull story from GameDev ',
          subtitle: 'How we closed a position in 3 days ',
          url: 'cases/case',
        },
      ],
    },
    SectionOurService: {
      title: 'Our services',
      items: [
        {
          title: 'Market Research of any complexity',
          description: `
###### **IT Market Research will provide you with the data of any complexity including the**
- overview of market value structure
- market volume analysis
- your reputation analysis
- competitive analysis
- cost drivers
- various driving factors

###### **Аnalysis of your industry sphere**

- industry size
- demand
- application
- revenue
- product
- region and segments
                `,
        },
        {
          title: 'Market Research of any complexity',
          description: `
Get the latest salary reviews that will help you track all the changes and reflect the main trends in any country you are intersted in so that not to under- or overpay to your employees.

###### **Learn about:**
- market capacities
- popularity of technologies
- social policies
- competitive analysis
- recruitment and relocation policies

###### **Find out about:**

- benefit policies
- social package
- bonuses and incentives to *attract top talents*
                `,
        },
        {
          title: 'Market Research of any complexity',
          description: `
Custom personalized research designed for your specific needs and objectives and presented in a convenient PDF format.
                `,
        },
      ],
    },
  };

  return (
    <main>
      <HeroMain
        title={mok.HeroSection.title}
        subtitle={mok.HeroSection.subtitle}
        animateBg
      />

      <div className="container">
        <section className={styles.sectionOurService}>
          <header>
            <h2>{mok.SectionOurService.title}</h2>
          </header>

          <div className={styles.sectionOurServiceGrid}>
            {mok.SectionOurService.items.map((item, idx) => (
              <div className={styles.servicesCard} key={idx}>
                <div className={styles.servicesCardTitle}>
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
                  <h5>{item.title}</h5>
                </div>
                <div className={styles.servicesCardDescription}>
                  <Markdown>{item.description}</Markdown>
                </div>
                <Button>Send a request</Button>
              </div>
            ))}
          </div>
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

      {/* @Component(singleton) Pricing*/}
      <div className="container">
        <section className={styles.sectionPricing}>
          <header>
            <h3>{mok.Pricing.title}</h3>
          </header>

          <div className={styles.sectionPricingGrid}>
            {mok.Pricing.items.map((item, idx) => (
              <div className={styles.cardPricing} key={idx}>
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.subtitle}</p>
                </div>

                <Button>{item.link.title}</Button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* @Component SectionFeedbackList */}
      <div className={styles.sectionFeedbackWrapper}>
        <SectionFeedbackList firstSlideTheme="white" />
      </div>

      <div className="container">
        <section>
          <h2>Order your individual analytical report</h2>
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
