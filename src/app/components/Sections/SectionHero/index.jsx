import Markdown from '@/app/components/Markdown';
import Button from '@/app/components/Button';
import OpenModalFormButton from '@/app/components/OpenModalFormButton';
import HeroAnimateBg from './HeroAnimateBg';
import styles from './styles.module.scss';
import { routes } from '@/config/routes';

export default async function SectionHero({
  title,
  description,
  hireNowBtn,
  candidateBtn,
}) {
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
            {hireNowBtn && (
              <OpenModalFormButton withIcon name={hireNowBtn.name} />
            )}
            {candidateBtn && (
              <Button
                theme="secondary"
                url={routes.vacancies()}
                name={candidateBtn.name}
              />
            )}
          </div>
        </section>
      </div>

      <HeroAnimateBg className={styles.animateBg} />
    </div>
  );
}
