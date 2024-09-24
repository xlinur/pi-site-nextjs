import { CardWeCanHelp } from '@/app/components/Cards/CardWeCanHelp';

import styles from './styles.module.scss';

const SectionWeCanHelp = () => {
  const mok = {
    title: 'We can help you with',
    recruitment: 'IT recruitment',
    businessConsulting: 'Business Consulting',
    executiveSeach: 'Executive Search',
    marketResearchAndAnalytics: 'Market Research and Analytics',
    relocation: 'Relocation of IT specialists',
    or: 'or',
    earnWithUsBtn: 'Earn with us',
  };

  return (
    <section className={styles.sectionHelp}>
      <header>
        <h3>{mok.title}</h3>
      </header>

      <div className={styles.sectionHelpGrid}>
        <CardWeCanHelp text={mok.recruitment} bgImage="peoples01" />
        <CardWeCanHelp text={mok.businessConsulting} bgImage="chat" />
        <CardWeCanHelp text={mok.executiveSeach} bgImage="peoples" />
        <CardWeCanHelp text={mok.marketResearchAndAnalytics} bgImage="graph" />
        <CardWeCanHelp text={mok.relocation} bgImage="location" />
        <CardWeCanHelp
          text={mok.or}
          bgImage="money"
          earnWithUsBtn={mok.earnWithUsBtn}
        />
      </div>
    </section>
  );
};

export default SectionWeCanHelp;
