import Markdown from 'react-markdown';
import Button from '@/app/components/Button';

import styles from './styles.module.scss';

export default function index() {
  return (
    <section className={styles.sectionHeroVacancies}>
      <header>
        <h1>
          <Markdown>Our vacancies</Markdown>
        </h1>
        <p>
          We necessarily will contact with you in the case of vacancy appearance
          which will correspond your professional skills and experience.
        </p>
      </header>

      <Button withIcon name={'Hire now'} />
    </section>
  );
}
