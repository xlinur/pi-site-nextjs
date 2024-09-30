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

            <h5>
              <Markdown>{description}</Markdown>
            </h5>
          </header>

          <div className={styles.sectionHeroActions}>
            {hireNowBtn && <Button withIcon name={hireNowBtn.name} openModal />}
            {candidateBtn && (
              <Button theme="secondary" name={candidateBtn.name} />
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
