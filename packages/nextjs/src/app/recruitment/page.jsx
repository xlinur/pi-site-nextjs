import Image from "next/image";
import Markdown from "react-markdown";

import HeroMain from "@/app/core/components/Sections/Heros/HeroMain";
import ContactForm from "@/app/core/components/ContactForm";

import SectionWeCanHelp from "@/app/core/components/Sections/SectionWeCanHelp";
import SectionCustomVision from "@/app/core/components/Sections/SectionCustomVision";
import SectionHowWeWork from "@/app/core/components/Sections/SectionHowWeWork";

import Button from "@/app/core/components/Button";
import chatSVG from "@/app/assets/icons/chat-white.svg";

import styles from "./styles.module.scss";

export default async function PageRecruitment() {
    const mok = {
        HeroSection: {
            title: "IT recruitment",
            subtitle:
                "Use the full potential of talent acquisition with PersonalInvest to maximize the benefits of our permanent or contract recruitment services and your business growth.",
            actions: [],
        },
        FirstSection: {
            title: "",
            text: "PersonalInvest team provides comprehensive and flexible HR strategies that allow you to either grow and strengthen your current team or build a new one from the ground up. With our experts you can be always sure that your business is safe in terms of its technological capacity. Using PersonalInvest services you are investing in the high quality staff resource that is ready to deliver you results 24/7 when needed. Our 500 000+ internal database of candidates can quickly and qualitatively meet any your hiring needs.",
            items: [
                {
                    title: "Quick results",
                    text: "First vacancies in 3 days",
                    url: "#",
                },
                {
                    title: "Convenient post payment",
                    text: "Payment is made by the fact of admission of the candidate",
                    url: "#",
                },
                {
                    title: "Exclusive expertise",
                    text: "Successful closing from junior to the TOP-management positions",
                    url: "#",
                },
                {
                    title: "1 free replacement",
                    text: "Guaranteed 1 free replacement in case of the candidate's failure to pass trial period",
                    url: "#",
                },
            ],
            link: {
                title: "Contract recruitment",
                event: "event-name",
            },
        },
        TypesOfRecruitment: {
            title: "Types of recruitment",
            items: [
                {
                    title: "Permanent recruitment",
                    subtitle:
                        "For long-term positions within an organization for an indefinite period.",
                    content: {
                        text: "Usually used in companies ready to commit to the team member, grow the employee and promote through the department’s hierarchy. Permanent employees stay longer in the companies accumulating all the knowldge, training and experience inside the company. To encourage highly skilled professionals to change jobs, they need to know that the move will provide them with job security. And permanent contract provides this security. To encourage highly skilled professionals to change jobs, they need to know that the move will provide them with job security. And permanent contract provides this security.",
                        link: {
                            title: "Hire now",
                            url: "#",
                        },
                    },
                },
                {
                    title: "Contract recruitment",
                    subtitle:
                        "Hiring on a contract or short-time basis to fill special requirements, temporary vacancies or to deal with seasonal fluctuations in demand.",
                    content: {
                        text: "Provides the most speed of hiring candidates who are ready to quickly fill staffing requirements that is especially important for startups. In PersonalInvest we have a great understanding of labour market prices and all the invoicing and payment systems in any country, that leads to cost savings and providing of international staff. By using the services of contract staffing agencies, businesses can streamline their hiring processes, ensure compliance, and focus on their core business without being burdened with extensive HR and administrative tasks reducing a lot of risks including employee misclassification.",
                        link: {
                            title: "Hire now",
                            url: "#",
                        },
                    },
                },
            ],
        },
        DieFillWidth: {
            title: `##### Not sure which type is best for you? Contact us and we will help you decide.`,
            actions: [
                {
                    title: "Order a free consultation",
                    url: "",
                },
            ],
        },
        Pricing: {
            title: "Pricing",
            items: [
                {
                    title: "Usual fee is 100%",
                    subtitle: "Gross of the candidate’s monthly salary",
                    link: {
                        title: "Contact",
                        url: "#",
                    },
                },
                {
                    title: "Split-recruitment",
                    subtitle:
                        "Agreed arrangement between us and your recruiters under NDA with 25% or 50% profit scheme.",
                    link: {
                        title: "More info ",
                        url: "#",
                    },
                },
                {
                    title: "Subscription model",
                    subtitle:
                        "Paying for a subscription per month at the price of one senior recruiter's salary will open up unlimited opportunities for you to work with 65 recruiters of our company.",
                    link: {
                        title: "Contact",
                        url: "#",
                    },
                },
            ],
        },
    };

    return (
        <main className={styles.pageRecruitment}>
            <HeroMain
                title={mok.HeroSection.title}
                subtitle={mok.HeroSection.subtitle}
                animateBg
            />

            <div className="container">
                <section className={styles.firstSection}>
                    <header>
                        <Markdown>{mok.FirstSection.text}</Markdown>

                        <Button>{mok.FirstSection.link.title}</Button>
                    </header>

                    <div className={styles.firstSectionGrid}>
                        {mok.FirstSection.items.map((item, idx) => (
                            <a
                                className={styles.firstSectionCard}
                                href={item.url}
                                key={idx}
                            >
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
                                </span>

                                <div>
                                    <h5>{item.title}</h5>
                                    <p>{item.text}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </div>

            <div className="container">
                <SectionHowWeWork />
            </div>

            {/* TODO: Cc */}
            {/* @Component SectionTypeOfRecruitment */}
            <div className="container">
                <section className={styles.typeOfRecruitment}>
                    <header>
                        <h3>{mok.TypesOfRecruitment.title}</h3>
                    </header>

                    <div className={styles.typeOfRecruitmentItems}>
                        {mok.TypesOfRecruitment.items.map((item, idx) => (
                            <div className={styles.gridItem} key={idx}>
                                <div className={styles.gridItemHeader}>
                                    <h4>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                </div>

                                <div className={styles.gridItemContent}>
                                    <Markdown>{item.content.text}</Markdown>

                                    <Button>{item.content.link.title}</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <section className={styles.sectionDieFillWidth}>
                <Image
                    className={styles.bgImage}
                    src={chatSVG}
                    alt="Chat icon"
                    width={226}
                    height={226}
                />
                <Markdown>{mok.DieFillWidth.title}</Markdown>

                <div className="actions">
                    {mok.DieFillWidth.actions.map((item, idx) => (
                        <Button size="lg" key={idx}>
                            {item.title}
                        </Button>
                    ))}
                </div>
            </section>

            <div className="container">
                <section className={styles.sectionPricing}>
                    <header>
                        <h3>{mok.Pricing.title}</h3>
                    </header>

                    <div className={styles.sectionPricingGrid}>
                        {mok.Pricing.items.map((item, idx) => (
                            <div className={styles.cardPricing} key={idx}>
                                <div>
                                    <h5>{item.title}</h5>
                                    <p>{item.subtitle}</p>
                                </div>

                                <Button>{item.link.title}</Button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* @Component SectionCustomVision */}
            <div className={styles.sectionCustomVisionWrapper}>
                <div className="container">
                    <SectionCustomVision />
                </div>
            </div>

            {/* @Component SectionWeCanHelp */}
            <div className={styles.sectionHelpWrapper}>
                <div className="container">
                    <SectionWeCanHelp />
                </div>
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
