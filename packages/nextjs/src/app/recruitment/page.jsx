import SectionHero from '@/app/components/Sections/SectionHero';
import ContactForm from '@/app/components/ContactForm';

import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionCustomVision from '@/app/components/Sections/SectionCustomVision';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import SectionInfoWithCards from '@/app/components/Sections/SectionInfoWithCards';
import SectionTypesOfRecruitment from '@/app/components/Sections/SectionTypesOfRecruitment';
import SectionNeedHelpSection from '@/app/components/Sections/SectionNeedHelpSection';
import SectionPricing from '@/app/components/Sections/SectionPricing';

import pageRecruitment from '@/app/api/strapi/pageRecruitment/route';

import styles from './styles.module.scss';

export default async function PageRecruitment() {
  const {
    AnimatedHero,
    InfoWithCards,
    TreeSection,
    TypesOfRecruitment,
    NeedHelpSection,
    Pricing,
    SectionWithIndustriesImage,
  } = await pageRecruitment();

  const mok = {
    HeroSection: {
      title: 'IT recruitment',
      subtitle:
        'Use the full potential of talent acquisition with PersonalInvest to maximize the benefits of our permanent or contract recruitment services and your business growth.',
      actions: [],
    },
    SectionInfoWithCards: {
      title: '',
      text: 'PersonalInvest team provides comprehensive and flexible HR strategies that allow you to either grow and strengthen your current team or build a new one from the ground up. With our experts you can be always sure that your business is safe in terms of its technological capacity. Using PersonalInvest services you are investing in the high quality staff resource that is ready to deliver you results 24/7 when needed. Our 500 000+ internal database of candidates can quickly and qualitatively meet any your hiring needs.',
      items: [
        {
          title: 'Quick results',
          text: 'First vacancies in 3 days',
          url: '#',
        },
        {
          title: 'Convenient post payment',
          text: 'Payment is made by the fact of admission of the candidate',
          url: '#',
        },
        {
          title: 'Exclusive expertise',
          text: 'Successful closing from junior to the TOP-management positions',
          url: '#',
        },
        {
          title: '1 free replacement',
          text: "Guaranteed 1 free replacement in case of the candidate's failure to pass trial period",
          url: '#',
        },
      ],
      link: {
        title: 'Contract recruitment',
        event: 'event-name',
      },
    },
    TypesOfRecruitment: {
      title: 'Types of recruitment',
      items: [
        {
          title: 'Permanent recruitment',
          subtitle:
            'For long-term positions within an organization for an indefinite period.',
          content: {
            text: 'Usually used in companies ready to commit to the team member, grow the employee and promote through the department’s hierarchy. Permanent employees stay longer in the companies accumulating all the knowldge, training and experience inside the company. To encourage highly skilled professionals to change jobs, they need to know that the move will provide them with job security. And permanent contract provides this security. To encourage highly skilled professionals to change jobs, they need to know that the move will provide them with job security. And permanent contract provides this security.',
            link: {
              title: 'Hire now',
              url: '#',
            },
          },
        },
        {
          title: 'Contract recruitment',
          subtitle:
            'Hiring on a contract or short-time basis to fill special requirements, temporary vacancies or to deal with seasonal fluctuations in demand.',
          content: {
            text: 'Provides the most speed of hiring candidates who are ready to quickly fill staffing requirements that is especially important for startups. In PersonalInvest we have a great understanding of labour market prices and all the invoicing and payment systems in any country, that leads to cost savings and providing of international staff. By using the services of contract staffing agencies, businesses can streamline their hiring processes, ensure compliance, and focus on their core business without being burdened with extensive HR and administrative tasks reducing a lot of risks including employee misclassification.',
            link: {
              title: 'Hire now',
              url: '#',
            },
          },
        },
      ],
    },
    DieFillWidth: {
      title: `##### Not sure which type is best for you? Contact us and we will help you decide.`,
      actions: [
        {
          title: 'Order a free consultation',
          url: '',
        },
      ],
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
  };

  return (
    <main className={styles.pageRecruitment}>
      <SectionHero {...AnimatedHero} />

      <div className="container">
        <SectionInfoWithCards {...InfoWithCards} />
      </div>

      <div className="container">
        <SectionHowWeWork {...TreeSection} />
      </div>

      <div className="container">
        <SectionTypesOfRecruitment {...TypesOfRecruitment} />
      </div>

      <SectionNeedHelpSection {...NeedHelpSection} />

      {/* @Component(single) Pricing */}
      <div className="container">
        <SectionPricing {...Pricing} />
      </div>

      {/* @Component SectionCustomVision */}
      <div className={styles.sectionCustomVisionWrapper}>
        <div className="container">
          <SectionCustomVision {...SectionWithIndustriesImage} />
        </div>
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
