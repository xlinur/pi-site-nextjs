import chat from '@/app/assets/icons/chat.svg';
import location from '@/app/assets/icons/location.svg';
import peoples from '@/app/assets/icons/peoples.svg';
import peoples01 from '@/app/assets/icons/people-1.svg';
import money from '@/app/assets/icons/money.svg';
import graph from '@/app/assets/icons/graph.svg';

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

  const cards = [
    {
      href: routes.itRecruitment(),
      text: recruitment,
      bgImage: peoples01,
    },
    {
      href: routes.consulting(),
      text: buisnessConsulting,
      bgImage: chat,
    },
    {
      href: routes.executiveSearch(),
      text: executiveSearch,
      bgImage: peoples,
    },
    {
      href: routes.analytics(),
      text: marketResearchAndAnalytics,
      bgImage: graph,
    },
    {
      href: routes.relocation(),
      text: relocation,
      bgImage: location,
    },
    {
      href: null,
      text: or,
      bgImage: money,
      openModalBtn: earnWithUs,
    },
  ];

  return (
    <div className={styles.sectionHelpWrapper}>
      <div className="container">
        <section className={styles.sectionHelp}>
          <header>
            <h3>{title}</h3>
          </header>

          <div className={styles.sectionHelpGrid}>
            {cards.map(({ href, text, bgImage, openModalBtn }, idx) => (
              <CardWeCanHelp
                key={idx}
                href={href}
                text={text}
                bgImage={bgImage}
                openModalBtn={openModalBtn}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
