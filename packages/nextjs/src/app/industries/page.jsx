import HeroMain from '@/app/components/Sections/Heros/HeroMain';
import ContactForm from '@/app/components/ContactForm';

import SectionWeCanHelp from '@/app/components/Sections/SectionWeCanHelp';
import SectionCustomVision from '@/app/components/Sections/SectionCustomVision';
import SectionHowWeWork from '@/app/components/Sections/SectionHowWeWork';
import SectionKeySectors from '@/app/components/Sections/SectionKeySectors';

// import Button from "@/app/components/Button";
// import chatSVG from "@/app/assets/icons/chat-white.svg";

import styles from './styles.module.scss';

export default async function PageIndustries() {
  const mok = {
    HeroSection: {
      title: '# *GameDev* IT recruitment',
      subtitle:
        'We are a global Informational Technology partner with such a narrow industry specialization as GameDev and we successfully connect IT talents with global GameDev companies and startups.',
      actions: [],
    },
    IndustrySectorsSections: {
      title: '### *Industries* we work with',
      items: [
        {
          title: 'GameDev',
          link: '',
        },
        {
          title: 'BlockChain',
          link: '',
        },
        {
          title: 'Saas',
          link: '',
        },
        {
          title: 'Fintech',
          link: '',
        },
        {
          title: 'Cryptocurrency',
          link: '',
        },
        {
          title: 'AI',
          link: '',
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
        <SectionKeySectors />
      </div>

      <div className="container">
        <SectionHowWeWork />
      </div>

      {/* @Component SectionCustomVision */}
      <div className={styles.sectionCustomVisionWrapper}>
        <div className="container">
          <SectionCustomVision />
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
