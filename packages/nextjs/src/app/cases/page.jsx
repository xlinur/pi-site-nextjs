import styles from './styles.module.scss';
import Button from '@/app/components/Button';
import { ContactFormWrapper } from '@/app/components/ContactForm/ContactFormWrapper';
import SectionHeroOurCases from '@/app/components/Sections/SectionHeroOurCases';
import PageTemplate from '@/app/components/PageTemplate';
import CardCase from './components/CardCase';

import pageCase from '@/app/api/strapi/pageCase/route';

export default async function PageCases() {
  const mok = {
    CasesList: {
      items: [
        {
          date: 'January 5, 2024',
          title: 'A succefull story from GameDev ',
          subtitle: 'How we closed a position in 3 days ',
          slug: 'cases/case',
        },
      ],
    },
  };

  const { HeroOurCasesSection, spheresFilterTitle } = await pageCase();

  return (
    <PageTemplate>
      <main className={styles.page}>
        <div className="container">
          <SectionHeroOurCases {...HeroOurCasesSection} />
        </div>

        <div className="container">
          <section className={styles.sectionCasesNav}>
            <div className={styles.casesNavItem}>
              <h5>{spheresFilterTitle}</h5>

              <div className={styles.casesNavItemList}>
                <Button theme="secondary" name="NET" />
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <section className={styles.sectionListLink}>
            <div className={styles.list}>
              {mok.CasesList.items.map((item, idx) => (
                <CardCase key={idx} data={item} />
              ))}
            </div>

            <div className={styles.pagination}>
              <a href="#">&laquo;</a>

              <div className={styles.numbers}>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
              </div>

              <a href="#">&raquo;</a>
            </div>
          </section>
        </div>

        <div className={styles.sectionFormWrapper}>
          <div className="container">
            <section className={styles.sectionForm}>
              <ContactFormWrapper />
            </section>
          </div>
        </div>
      </main>
    </PageTemplate>
  );
}
