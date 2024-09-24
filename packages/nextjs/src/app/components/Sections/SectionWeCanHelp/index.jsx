import { CardWeCanHelp } from '@/app/components/Cards/CardWeCanHelp';

import weCanHelpYouWithRequest from '@/app/api/strapi/weCanHelpYouWith/route';

import styles from './styles.module.scss';

export default async function SectionWeCanHelp() {
  const {
    title,
    recruitment,
    businessConsulting,
    executiveSearch,
    marketResearchAndAnalytics,
    relocation,
    or,
    earnWithUsBtn,
  } = await weCanHelpYouWithRequest();

  return (
    <section className={styles.sectionHelp}>
      <header>
        <h3>{title}</h3>
      </header>

      <div className={styles.sectionHelpGrid}>
        <CardWeCanHelp text={recruitment} bgImage="peoples01" />
        <CardWeCanHelp text={businessConsulting} bgImage="chat" />
        <CardWeCanHelp text={executiveSearch} bgImage="peoples" />
        <CardWeCanHelp text={marketResearchAndAnalytics} bgImage="graph" />
        <CardWeCanHelp text={relocation} bgImage="location" />
        <CardWeCanHelp
          text={or}
          bgImage="money"
          earnWithUsBtn={earnWithUsBtn}
        />
      </div>
    </section>
  );
}
