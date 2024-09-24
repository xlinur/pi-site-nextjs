import Image from 'next/image';
import Button from '@/app/components/Button';
import heroLinesPNG from '@/app/assets/images/hero-lines.png';
import HeroAnimateBg from '../HeroAnimateBg';
import styles from './styles.module.scss';
import Markdown from 'react-markdown';

const HeroMain = async ({
  animateBg = false,
  children,
  title = '',
  description = '',
  actions = [],
}) => {
  return (
    <div className={styles.sectionWrapper}>
      <div className="container">
        <section className={styles.sectionHero}>
          <header>
            <Markdown>{title}</Markdown>
            <Markdown>{description}</Markdown>
          </header>

          <div className={styles.sectionHeroActions}>
            {actions.map((action, idx) => (
              <Button key={idx} theme="primary" size="lg" withIcon>
                {action.title}
              </Button>
            ))}
          </div>

          {children}
        </section>
      </div>

      {!animateBg ? (
        <div className={styles.sectionHeroDecorImage}>
          <Image src={heroLinesPNG} alt="decor lines hero block" fill></Image>
        </div>
      ) : (
        <HeroAnimateBg className={styles.animateBg} />
      )}
    </div>
  );
};

export default HeroMain;
