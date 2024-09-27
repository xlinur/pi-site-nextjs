import ContactForm from '@/app/components/ContactForm';
import SectionCaseHero from '@/app/components/Sections/SectionCaseHero';
import SectionRecruitmentSummary from '@/app/components/Sections/SectionRecruitmentSummary';
import SectionCompleteTask from '@/app/components/Sections/SectionCompleteTask';
import SectionTalentMatch from '@/app/components/Sections/SectionTalentMatch';
import SectionRelocationHelpHero from '@/app/components/Sections/SectionRelocationHelpHero';
// import SectionSuccessStories from '@/app/components/Sections/SectionSuccessStories';

import styles from './styles.module.scss';

import pageCases from '@/app/api/strapi/pageCases/route';

export default async function PageCase({ params }) {
  const { slug } = params;

  const {
    SectionCaseHero: CaseHero,
    SectionRecruitmentSummary: RecruitmentSummary,
    SectionWithFeatures,
    SectionCompleteTask: CompleteTask,
    SectionTalentMatch: TalentMatch,
  } = await pageCases(slug);

  // const mok = {
  //   CaseHeroSection: {
  //     title: '## A succefull story *from GameDev*',
  //     subtitle: 'How we filled a Data Engineer vacancy in 3 days',
  //     description:
  //       'Today we tell you how, thanks to the teamwork of Lead IT recruiter Valeria Soboleva and research scientist Karina Kovalenok, we managed to select IT personnel and find a Data engineer in Semrush, an online platform that allows marketing specialists to create campaigns in all available channels, manage them, and measure results and improve the online visibility of your products and services. Despite all the difficulties, our team managed to fill this vacancy in less than two months. About how we solved the problem in a case.',
  //   },
  //   RecruitmentSummarySection: {
  //     title: '### Recruiting a Data Engineer: *Challenge and Difficulties*',
  //     subtle:
  //       'In the summer of 2022, Semrush approached us with a request to find a Data Engineer. As usual, no case is without difficulties, and this one is, of course, no exception:',
  //     companyOffered:
  //       'A two-level relocation plan due to the fact that documents of candidates from the Russian Federation to Europe take a long time to be processed (about 6 months). The candidate was offered relocation from the Russian Federation to Serbia, and upon successful completion of the probationary period, he will be given a new offer and the subsequent process of relocation to Spain.',
  //     items: [
  //       {
  //         title: 'Narrow profile',
  //         text: 'The company needed a DE engineer who would work well with databases (indexes, search and query optimization), and in particular with ClickHouse. The team uses this database as their main repository, and they have a separate team dedicated to optimizing the performance of this database for the rest of the departments.',
  //       },
  //       {
  //         title: 'Narrow profile',
  //         text: 'The company needed a DE engineer who would work well with databases (indexes, search and query optimization), and in particular with ClickHouse. The team uses this database as their main repository, and they have a separate team dedicated to optimizing the performance of this database for the rest of the departments.',
  //       },
  //       {
  //         title: 'Narrow profile',
  //         text: 'The company needed a DE engineer who would work well with databases (indexes, search and query optimization), and in particular with ClickHouse. The team uses this database as their main repository, and they have a separate team dedicated to optimizing the performance of this database for the rest of the departments.',
  //       },
  //     ],
  //   },
  //   PersonnelRecruitmentSection: {
  //     title: 'Recruitment of IT personnel: filling a vacancy',
  //     subtitle:
  //       'Recruitment of IT personnel: filling a vacancy Our client is a large company, so the IT specialist was offered competitive conditions and a full social package:',
  //     items: [
  //       {
  //         text: 'Market salary',
  //         url: '#',
  //       },
  //       {
  //         text: 'Assistance with relocation (assistance with visa and documents, compensation for air tickets, payment for housing for 1-2 months and payment of organizational costs for the candidate and his family)',
  //         url: '#',
  //       },
  //       {
  //         text: 'Medical insurance',
  //         url: '#',
  //       },
  //       {
  //         text: 'Ability to work from the office or remotely',
  //         url: '#',
  //       },
  //       {
  //         text: 'Various amenities in the form of courses in Spanish and English',
  //         url: '#',
  //       },
  //     ],
  //   },
  //   CompleteTaskSection: {
  //     title: 'How we completed the task',
  //     subtitle:
  //       'It was obvious that we had a difficult task ahead of us. But our persistence, deep understanding of the IT field and knowledge of IT recruiting tactics allowed us to overcome obstacles. To successfully fill these vacancies, we have taken several steps:',
  //     items: [
  //       {
  //         title: 'We give priority to nonresident specialists',
  //         text: 'Assistance with relocation (assistance with visa and documents, compensation for air tickets, payment for housing for 1-2 months and payment of organizational costs for the candidate and his family)',
  //       },
  //       {
  //         title: 'We focused our search on young professionals',
  //         text: "We identified the client's company as a company creating a valuable, scalable product. Many young professionals are interested in participating in dynamic, technological projects.",
  //       },
  //       {
  //         title:
  //           'We have expanded our recruitment efforts through additional channels.',
  //         text: 'We have expanded our search beyond Telegram, LinkedIn and HeadHunter by actively leveraging Amazing Hiring, our internal candidate database and various popular social media platforms.',
  //       },
  //       {
  //         title: 'Conducted interviews',
  //         text: "To fill these vacancies, we extensively reviewed the CVs of over 400 candidates and conducted 30 interviews with potential candidates, resulting in offers being extended to seven of them. The client successfully attracted three of these candidates: all three came from different recruitment channels and moved from other cities. Our success in achieving this result is due to Lucky Hunter's recruiting strategies and our ability to prioritize IT professionals.",
  //       },
  //     ],
  //   },
  //   CasesList: {
  //     items: [
  //       {
  //         date: 'January 5, 2024',
  //         title: 'A succefull story from GameDev ',
  //         subtitle: 'How we closed a position in 3 days ',
  //         url: 'cases/case',
  //       },
  //       {
  //         date: 'January 5, 2024',
  //         title: 'A succefull story from GameDev ',
  //         subtitle: 'How we closed a position in 3 days ',
  //         url: 'cases/case',
  //       },
  //       {
  //         date: 'January 5, 2024',
  //         title: 'A succefull story from GameDev ',
  //         subtitle: 'How we closed a position in 3 days ',
  //         url: 'cases/case',
  //       },
  //       {
  //         date: 'January 5, 2024',
  //         title: 'A succefull story from GameDev ',
  //         subtitle: 'How we closed a position in 3 days ',
  //         url: 'cases/case',
  //       },
  //     ],
  //   },
  // };
  return (
    <main className={styles.pageCases}>
      <div className="container">
        <SectionCaseHero {...CaseHero} />
      </div>

      <div className="container">
        <SectionRecruitmentSummary {...RecruitmentSummary} />
      </div>

      <div className="container">
        <SectionRelocationHelpHero {...SectionWithFeatures} isNotHero />
      </div>

      <div className="container">
        <SectionCompleteTask {...CompleteTask} />
      </div>

      <div className={styles.fillContainer}>
        <div className="container">
          <SectionTalentMatch {...TalentMatch} />
        </div>
      </div>

      {/* <div className={styles.sectionMoreCasesWrapper}>
        <SectionSuccessStories />
      </div> */}

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
