import Markdown from 'react-markdown';
import Button from '@/app/components/Button';

import HeroAnimateBg from './HeroAnimateBg';
import styles from './styles.module.scss';

export default async function SectionHero({ title, description, actions }) {
  return (
    <div className={styles.sectionWrapper}>
      <div className="container">
        <section className={styles.sectionHero}>
          <header>
            <h1>
              <Markdown>{title}</Markdown>
            </h1>
            <Markdown className={styles.p}>{description}</Markdown>
          </header>

          <div className={styles.sectionHeroActions}>
            {actions?.map((action, idx) => (
              <Button key={idx} theme="primary" size="lg" withIcon>
                {action.title}
              </Button>
            ))}
          </div>
        </section>
      </div>

      <HeroAnimateBg className={styles.animateBg} />
    </div>
  );
}
