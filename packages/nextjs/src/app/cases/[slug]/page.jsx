import Image from "next/image";
import Markdown from "react-markdown";
import Button from "@/app/core/components/Button";
import ContactForm from "@/app/core/components/ContactForm";
import SliderCases from "@/app/core/components/Sliders/SliderCases";

import relocation from "@/app/assets/icons/relocation.png";
import peopleSVG from "@/app/assets/icons/people-1-white.svg";

import styles from "./styles.module.scss";

export default async function PageCase() {
    const mok = {
        CaseHeroSection: {
            title: "## A succefull story *from GameDev*",
            subtitle: "How we filled a Data Engineer vacancy in 3 days",
            description:
                "Today we tell you how, thanks to the teamwork of Lead IT recruiter Valeria Soboleva and research scientist Karina Kovalenok, we managed to select IT personnel and find a Data engineer in Semrush, an online platform that allows marketing specialists to create campaigns in all available channels, manage them, and measure results and improve the online visibility of your products and services. Despite all the difficulties, our team managed to fill this vacancy in less than two months. About how we solved the problem in a case.",
        },
        RecruitmentSummarySection: {
            title: "### Recruiting a Data Engineer: *Challenge and Difficulties*",
            subtle: "In the summer of 2022, Semrush approached us with a request to find a Data Engineer. As usual, no case is without difficulties, and this one is, of course, no exception:",
            companyOffered:
                "A two-level relocation plan due to the fact that documents of candidates from the Russian Federation to Europe take a long time to be processed (about 6 months). The candidate was offered relocation from the Russian Federation to Serbia, and upon successful completion of the probationary period, he will be given a new offer and the subsequent process of relocation to Spain.",
            items: [
                {
                    title: "Narrow profile",
                    text: "The company needed a DE engineer who would work well with databases (indexes, search and query optimization), and in particular with ClickHouse. The team uses this database as their main repository, and they have a separate team dedicated to optimizing the performance of this database for the rest of the departments.",
                },
                {
                    title: "Narrow profile",
                    text: "The company needed a DE engineer who would work well with databases (indexes, search and query optimization), and in particular with ClickHouse. The team uses this database as their main repository, and they have a separate team dedicated to optimizing the performance of this database for the rest of the departments.",
                },
                {
                    title: "Narrow profile",
                    text: "The company needed a DE engineer who would work well with databases (indexes, search and query optimization), and in particular with ClickHouse. The team uses this database as their main repository, and they have a separate team dedicated to optimizing the performance of this database for the rest of the departments.",
                },
            ],
        },
        PersonnelRecruitmentSection: {
            title: "Recruitment of IT personnel: filling a vacancy",
            subtitle:
                "Recruitment of IT personnel: filling a vacancy Our client is a large company, so the IT specialist was offered competitive conditions and a full social package:",
            items: [
                {
                    text: "Market salary",
                    url: "#",
                },
                {
                    text: "Assistance with relocation (assistance with visa and documents, compensation for air tickets, payment for housing for 1-2 months and payment of organizational costs for the candidate and his family)",
                    url: "#",
                },
                {
                    text: "Medical insurance",
                    url: "#",
                },
                {
                    text: "Ability to work from the office or remotely",
                    url: "#",
                },
                {
                    text: "Various amenities in the form of courses in Spanish and English",
                    url: "#",
                },
            ],
        },
        CompleteTaskSection: {
            title: "How we completed the task",
            subtitle:
                "It was obvious that we had a difficult task ahead of us. But our persistence, deep understanding of the IT field and knowledge of IT recruiting tactics allowed us to overcome obstacles. To successfully fill these vacancies, we have taken several steps:",
            items: [
                {
                    title: "We give priority to nonresident specialists",
                    text: "Assistance with relocation (assistance with visa and documents, compensation for air tickets, payment for housing for 1-2 months and payment of organizational costs for the candidate and his family)",
                },
                {
                    title: "We focused our search on young professionals",
                    text: "We identified the client's company as a company creating a valuable, scalable product. Many young professionals are interested in participating in dynamic, technological projects.",
                },
                {
                    title: "We have expanded our recruitment efforts through additional channels.",
                    text: "We have expanded our search beyond Telegram, LinkedIn and HeadHunter by actively leveraging Amazing Hiring, our internal candidate database and various popular social media platforms.",
                },
                {
                    title: "Conducted interviews",
                    text: "To fill these vacancies, we extensively reviewed the CVs of over 400 candidates and conducted 30 interviews with potential candidates, resulting in offers being extended to seven of them. The client successfully attracted three of these candidates: all three came from different recruitment channels and moved from other cities. Our success in achieving this result is due to Lucky Hunter's recruiting strategies and our ability to prioritize IT professionals.",
                },
            ],
        },
        CasesList: {
            items: [
                {
                    date: "January 5, 2024",
                    title: "A succefull story from GameDev ",
                    subtitle: "How we closed a position in 3 days ",
                    url: "cases/case",
                },
                {
                    date: "January 5, 2024",
                    title: "A succefull story from GameDev ",
                    subtitle: "How we closed a position in 3 days ",
                    url: "cases/case",
                },
                {
                    date: "January 5, 2024",
                    title: "A succefull story from GameDev ",
                    subtitle: "How we closed a position in 3 days ",
                    url: "cases/case",
                },
                {
                    date: "January 5, 2024",
                    title: "A succefull story from GameDev ",
                    subtitle: "How we closed a position in 3 days ",
                    url: "cases/case",
                },
            ],
        },
    };
    return (
        <main className={styles.pageCases}>
            <div className="container">
                <section className={styles.sectionCaseHero}>
                    <header>
                        <Markdown>{mok.CaseHeroSection.title}</Markdown>
                        <Markdown className={styles.subtitle}>
                            {mok.CaseHeroSection.subtitle}
                        </Markdown>
                        <Markdown className={styles.description}>
                            {mok.CaseHeroSection.description}
                        </Markdown>
                    </header>
                </section>
            </div>

            <div className="container">
                <section className={styles.sectionRecruitmentSummary}>
                    <header>
                        <Markdown>
                            {mok.RecruitmentSummarySection.title}
                        </Markdown>
                        <Markdown>
                            {mok.RecruitmentSummarySection.subtitle}
                        </Markdown>
                    </header>

                    <div className={styles.list}>
                        {mok.RecruitmentSummarySection.items.map(
                            (item, idx) => (
                                <div className={styles.listItem} key={idx}>
                                    <div className={styles.title}>
                                        <span>
                                            {/* check-circle svg */}
                                            <svg
                                                width="48"
                                                height="48"
                                                viewBox="0 0 48 48"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M40.6666 22.4666V23.9999C40.6645 27.594 39.5008 31.0911 37.3488 33.9696C35.1969 36.8482 32.1721 38.9541 28.7255 39.9731C25.279 40.9921 21.5954 40.8698 18.224 39.6242C14.8527 38.3787 11.9743 36.0768 10.0182 33.0617C8.06203 30.0467 7.1329 26.48 7.36938 22.8938C7.60586 19.3075 8.99526 15.8938 11.3304 13.1617C13.6655 10.4296 16.8212 8.52557 20.3269 7.73351C23.8326 6.94145 27.5004 7.30383 30.7833 8.7666"
                                                    stroke="#2DA5D9"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M40.6667 10.6667L24 27.3501L19 22.3501"
                                                    stroke="#2DA5D9"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <b>{item.title}</b>
                                        </span>
                                    </div>
                                    <div className={styles.text}>
                                        {item.text}
                                    </div>
                                </div>
                            ),
                        )}
                    </div>

                    <div className={styles.companyOffered}>
                        <div>
                            <h5>
                                The company <br /> offered:
                            </h5>
                            <Image
                                src={relocation}
                                alt="location image"
                                width={200}
                                height={170}
                            />
                        </div>

                        <div>
                            {mok.RecruitmentSummarySection.companyOffered}
                        </div>
                    </div>
                </section>
            </div>

            <div className="container">
                <section className={styles.sectionPersonnelRecruitment}>
                    <header>
                        <h3>{mok.PersonnelRecruitmentSection.title}</h3>
                        <p>{mok.PersonnelRecruitmentSection.subtitle}</p>
                    </header>

                    <div className={styles.list}>
                        {mok.PersonnelRecruitmentSection.items.map(
                            (item, idx) => (
                                <a
                                    href={item.url}
                                    className={styles.item}
                                    key={idx}
                                >
                                    <svg
                                        width="29"
                                        height="29"
                                        viewBox="0 0 29 29"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18.0321 19.0311C18.5844 19.0311 19.0321 18.5834 19.0321 18.0311L19.0321 9.0311C19.0321 8.47882 18.5844 8.0311 18.0321 8.0311C17.4798 8.0311 17.0321 8.47882 17.0321 9.0311L17.0321 17.0311L9.03208 17.0311C8.4798 17.0311 8.03208 17.4788 8.03208 18.0311C8.03208 18.5834 8.4798 19.0311 9.03208 19.0311L18.0321 19.0311ZM9.5468 10.96L17.325 18.7382L18.7392 17.324L10.961 9.54582L9.5468 10.96Z"
                                            fill="currentColor"
                                        />
                                    </svg>

                                    <p>{item.text}</p>
                                </a>
                            ),
                        )}
                    </div>
                </section>
            </div>

            <div className="container">
                <section className={styles.completeTaskSection}>
                    <header>
                        <h3>{mok.CompleteTaskSection.title}</h3>
                        <p>{mok.CompleteTaskSection.subtitle}</p>
                    </header>

                    <div className={styles.list}>
                        {mok.CompleteTaskSection.items.map((item, idx) => (
                            <div className={styles.listItem} key={idx}>
                                <span className="h5">{idx + 1}</span>
                                <h5 className={styles.title}>{item.title}</h5>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <div className={styles.fillContainer}>
                <div className="container">
                    <section>
                        <div className={styles.image}>
                            <Image
                                src={peopleSVG}
                                alt="icon"
                                width={401}
                                height={354}
                            />
                        </div>
                        <div className={styles.content}>
                            <Markdown>
                                ##### Feel free to contact us, and we will find
                                *and IT specialist* of any level to suit your
                                vacancy.
                            </Markdown>

                            <Button icon>Hire now</Button>
                        </div>
                    </section>
                </div>
            </div>

            {/* @Component SectionMoreCases */}
            <div className={styles.sectionMoreCasesWrapper}>
                <section className={styles.sectionMoreCases}>
                    <div className="container">
                        <header>
                            <h3>More cases on this topic</h3>

                            <Button theme="secondary">View all cases</Button>
                        </header>
                    </div>

                    <div className={styles.slider}>
                        <SliderCases data={mok.CasesList.items} />
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
