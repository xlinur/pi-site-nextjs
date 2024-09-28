import styles from './styles.module.scss';
import Button from '@/app/components/Button';
import ContactForm from '@/app/components/ContactForm';
import SectionHeroOurCases from '@/app/components/Sections/SectionHeroOurCases';
import CardCase from './components/CardCase';

import pageCase from '@/app/api/strapi/pageCase/route';

export default async function PageCases() {
  const mok = {
    CasesNavigation: [
      {
        title: 'IT Staff',
        items: [
          {
            title: 'NET',
            slug: 'net',
          },
          {
            title: 'Full Stack Node JS',
            slug: 'full-stack-net',
          },
          {
            title: 'C++',
            slug: 'c++',
          },
        ],
      },
      {
        title: 'Executive Search',
        items: [
          {
            title: 'CTO',
            slug: 'cto',
          },
          {
            title: 'Case',
            slug: 'case',
          },
        ],
      },
      {
        title: 'Analytics',
        items: [
          {
            title: 'Survey',
            slug: 'net',
          },
          {
            title: 'Case',
            slug: 'case',
          },
        ],
      },
    ],
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
  const { HeroOurCasesSection } = await pageCase();

  return (
    <main>
      <div className="container">
        <SectionHeroOurCases {...HeroOurCasesSection} />
      </div>

      <div className="container">
        <section className={styles.sectionCasesNav}>
          {mok.CasesNavigation.map((item, idx) => (
            <div className={styles.casesNavItem} key={idx}>
              <h5>{item.title}</h5>

              <div className={styles.casesNavItemList}>
                {item.items.map((link, idx) => (
                  <Button key={idx} theme="secondary">
                    {link.title}
                  </Button>
                ))}
              </div>
            </div>
          ))}
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
            <ContactForm />
          </section>
        </div>
      </div>
    </main>
  );
}
