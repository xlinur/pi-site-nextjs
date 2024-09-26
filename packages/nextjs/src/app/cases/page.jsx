import Markdown from 'react-markdown';
import styles from './styles.module.scss';
import Button from '@/app/components/Button';
import ContactForm from '@/app/components/ContactForm';
import CardCase from './[slug]/components/CardCase';

// import pageSplitRecruitment from '@/app/api/strapi/pageSplitRecruitment/route';

export default async function PageCases() {
  const mok = {
    HeroOurCases: {
      title: '# Our *cases*',
      subtitle:
        'Our IT recruitment services *are tailored to meet your specific needs*, ensuring that we find the perfect fit for your team and organization.',
      items: [
        {
          text: 'With our extensive database of IT professionals and expertise in the industry, we are confident in our ability to source top talent for your IT vacancies.',
        },
        {
          text: 'Our diligent screening and selection process ensure that we only make you meet with the most qualified candidates, saving you time and resources in the hiring process.',
        },
        {
          text: "We understand the importance of cultural fit, and our recruiters work closely with you to ensure that the candidates we present not only have the technical skills, but also align with your company's values and work culture.",
        },
      ],
    },
    CasesNavigation: [
      {
        title: 'IT Staff',
        items: [
          {
            title: 'NET',
            url: 'net',
          },
          {
            title: 'Full Stack Node JS',
            url: 'full-stack-net',
          },
          {
            title: 'C++',
            url: 'c++',
          },
        ],
      },
      {
        title: 'Executive Search',
        items: [
          {
            title: 'CTO',
            url: 'cto',
          },
          {
            title: 'Case',
            url: 'case',
          },
        ],
      },
      {
        title: 'Analytics',
        items: [
          {
            title: 'Survey',
            url: 'net',
          },
          {
            title: 'Case',
            url: 'case',
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
          url: 'cases/case',
        },
      ],
    },
  };
  return (
    <main>
      <div className="container">
        <section className={styles.firstSection}>
          <header>
            <Markdown>{mok.HeroOurCases.title}</Markdown>
            <Markdown>{mok.HeroOurCases.subtitle}</Markdown>
          </header>

          <div className={styles.firstSectionGrid}>
            {mok.HeroOurCases.items.map((item, idx) => (
              <div key={idx} className={styles.firstSectionItem}>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className={styles.firstSectionFooter}>
            <div className={styles.content}>
              <Markdown>
                By partnering with PersonalInvest for your IT recruitment needs,
                you gain access to our continuous support and guidance, even
                after the placement is made, ensuring long-term success and
                *satisfaction for both the candidate* and *your organization.*
              </Markdown>
            </div>

            <div className={styles.actions}>
              <Button size="lg">Hire now</Button>
              <Button size="lg">I’m a candidate</Button>
            </div>
          </div>
        </section>
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

      {/* @Component SectionContactForm */}
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
