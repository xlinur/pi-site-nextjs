import { CardWeCanHelp } from '@/app/components/Cards/CardWeCanHelp';

import weCanHelpYouWithRequest from '@/app/api/strapi/weCanHelpYouWith/route';
import { routes } from '@/config/routes';

import styles from './styles.module.scss';

export default async function SectionWeCanHelp() {
  const {
    title,
    recruitment,
    buisnessConsulting,
    executiveSearch,
    marketResearchAndAnalytics,
    relocation,
    or,
    earnWithUs,
  } = await weCanHelpYouWithRequest();

  return (
    <div className={styles.sectionHelpWrapper}>
      <div className="container">
        <section className={styles.sectionHelp}>
          <header>
            <h3>{title}</h3>
          </header>

          <div className={styles.sectionHelpGrid}>
            <CardWeCanHelp
              href={routes.itRecruitment()}
              text={recruitment}
              bgImage="peoples01"
            />
            <CardWeCanHelp
              href={routes.consulting()}
              text={buisnessConsulting}
              bgImage="chat"
            />
            <CardWeCanHelp
              href={routes.executiveSearch()}
              text={executiveSearch}
              bgImage="peoples"
            />
            <CardWeCanHelp
              href={routes.analytics()}
              text={marketResearchAndAnalytics}
              bgImage="graph"
            />
            <CardWeCanHelp
              href={routes.relocation()}
              text={relocation}
              bgImage="location"
            />
            <CardWeCanHelp
              text={or}
              bgImage="money"
              earnWithUsBtn={earnWithUs}
              openModal
            />
          </div>
        </section>
      </div>
    </div>
  );
}
