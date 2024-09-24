import Image from 'next/image';
import Markdown from 'react-markdown';

import Button from '@/app/components/Button';
import heroLinesPNG from '@/app/assets/images/hero-lines.png';

import Advantages from '../Advantages';
import Worldwide from '../Worldwide';

import styles from './styles.module.scss';

export default async function HeroMain({
  recorWord,
  title,
  description,
  actions,
  advantages,
}) {
  return (
    <div className={styles.sectionWrapper}>
      <div className="container">
        <section className={styles.sectionHero}>
          <header>
            <h1>
              <Markdown>{title}</Markdown>
            </h1>
            <Markdown>{description}</Markdown>
          </header>

          <div className={styles.sectionHeroActions}>
            {actions?.map((action, idx) => (
              <Button key={idx} theme="primary" size="lg" withIcon>
                {action.title}
              </Button>
            ))}
          </div>

          <Advantages advantages={advantages || []} />
          <Worldwide recorWord={recorWord} />
        </section>
      </div>

      <div className={styles.sectionHeroDecorImage}>
        <Image src={heroLinesPNG} alt="decor lines hero block" fill></Image>
      </div>
    </div>
  );
}
