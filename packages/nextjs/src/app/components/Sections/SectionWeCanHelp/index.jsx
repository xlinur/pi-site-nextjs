import { CardWeCanHelp } from '@/app/components/Cards/CardWeCanHelp';

import styles from './styles.module.scss';

const SectionWeCanHelp = () => {
  return (
    <section className={styles.sectionHelp}>
      <header>
        <h3>We can help you with</h3>
      </header>

      <div className={styles.sectionHelpGrid}>
        <CardWeCanHelp text="IT recruitment" bgImage="peoples01" />
        <CardWeCanHelp text="Business Consulting" bgImage="chat" />
        <CardWeCanHelp text="Executive Search" bgImage="peoples" />
        <CardWeCanHelp text="Market Research and Analytics" bgImage="graph" />
        <CardWeCanHelp text="Relocation of IT specialists" bgImage="location" />
        <CardWeCanHelp text="or" bgImage="money" />
      </div>
    </section>
  );
};

export default SectionWeCanHelp;
