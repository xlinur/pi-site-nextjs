import PageTemplate from '@/app/components/PageTemplate';
import SectionHeroVacancies from '@/app/components/Sections/SectionHeroVacancies';
import SectionFindVacancy from '@/app/components/Sections/SectionFindVacancy';

import styles from './styles.module.scss';

export default async function PageVacancies() {
  return (
    <PageTemplate>
      <main className={styles.page}>
        <div className="container">
          <SectionHeroVacancies />
        </div>

        <div className="container">
          <SectionFindVacancy />
        </div>
      </main>
    </PageTemplate>
  );
}
