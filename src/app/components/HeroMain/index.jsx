import Image from 'next/image';
import Markdown from '@/app/components/Markdown';

import Button from '@/app/components/Button';
import OpenModalFormButton from '@/app/components/OpenModalFormButton';
import heroLinesPNG from '@/app/assets/images/hero-lines.png';

import Advantages from '../Advantages';
import Worldwide from '../Worldwide';
import { routes } from '@/config/routes';

import styles from './styles.module.scss';

export default async function HeroMain({
  recorWord,
  title,
  description,
  hireNowBtn,
  candidateBtn,
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

            <p className={styles.heroDescription}>
              <Markdown>{description}</Markdown>
            </p>
          </header>

          <div className={styles.sectionHeroActions}>
            {hireNowBtn && (
              <OpenModalFormButton withIcon name={hireNowBtn.name} />
            )}
            {candidateBtn && (
              <Button
                url={routes.vacancies()}
                theme="secondary"
                name={candidateBtn.name}
              />
            )}
          </div>

          <div className={styles.advantagesWrapper}>
            <Advantages advantages={advantages.advantage} />
          </div>
          <Worldwide recorWord={recorWord} />
        </section>
      </div>

      <div className={styles.sectionHeroDecorImage}>
        <Image src={heroLinesPNG} alt="decor lines hero block" fill></Image>
      </div>
    </div>
  );
}
