import SectionHero from '@/app/components/Sections/SectionHero';
import SectionInfoWithCards from '@/app/components/Sections/SectionInfoWithCards';
import SectionKeySectors from '@/app/components/Sections/SectionKeySectors';
import SectionCustomVision from '@/app/components/Sections/SectionCustomVision';
import SectionFeedbackList from '@/app/components/Sections/SectionFeedbackList';
import SectionCompaniesLogo from '@/app/components/Sections/SectionCompaniesLogo';
import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import ContactForm from '@/app/components/ContactForm';
import Button from '@/app/components/Button';
import SliderCases from '@/app/components/Sliders/SliderCases';

import styles from './styles.module.scss';

export default function SpheresPage() {
  const mok = {
    HeroSection: {
      title: '# Industries *we work with*',
      subtitle:
        'We are *a global Informational Technology* partner with narrow industry specializations. PersonalInvest delivers results because our expertise lies in areas and industries that we know thoroughly.',
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
  };

  return (
    <main>
      <SectionHero
        title={mok.HeroSection.title}
        description={mok.HeroSection.subtitle}
      />

      <div className="container">
        <SectionInfoWithCards data={mok.SectionInfoWithCards} />
      </div>

      <div className="container">
        <SectionKeySectors />
      </div>

      {/* @Component SectionCustomVision */}
      <div className={styles.sectionCustomVisionWrapper}>
        <div className="container">
          <SectionCustomVision />
        </div>
      </div>

      {/* @Component SectionCompaniesLogo */}
      <SectionCompaniesLogo />

      {/* @Component SectionFeedbackList */}
      <div className={styles.sectionFeedbackWrapper}>
        <SectionFeedbackList firstSlideTheme="white" />
      </div>

      {/* @Component SectionMoreCases */}
      <div className={styles.sectionMoreCasesWrapper}>
        <section className={styles.sectionMoreCases}>
          <div className="container">
            <header>
              <h3>More cases on this topic</h3>

              <Button theme="secondary">View all cases</Button>
            </header>
          </div>

          <div className={styles.slider}>
            <SliderCases data={mok.CasesList.items} />
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
