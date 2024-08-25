import Button from "@/app/core/components/Button";
import styles from "./styles.module.scss";

const SectionRecruitmentProcess = () => {
    return (
        <section className={styles.sectionRecruitmentProcess}>
            <header>
                <h2>
                    Exclusive recruitment process <br /> for smart business
                </h2>
                <p>
                    We provide each of our clients with a comfortable and
                    convenient process of working with our team
                </p>
            </header>

            <div className={styles.steps}>
                {[
                    {
                        title: "Attractive fees",
                        text: "We provide the most attractive fees in the EU, USA and other markets.",
                    },
                    {
                        title: "Job Description",
                        text: "We help our clients to create a vacancy with exellent sales points.",
                    },
                    {
                        title: "Talent Search",
                        text: "The best sources of recruitment are found out followed by identifying the right talent with the right cultural code, hard and soft skills. We also provide our clients with technical prescreens of <span>candidates already in 3 days.</span>",
                    },
                    {
                        title: "Short listing",
                        text: "The applications are screened and candidates who fulfil the requirenments are selected.",
                    },
                    {
                        title: "Interviewing",
                        text: "Short-listed candidates move to the interview process.",
                    },
                    {
                        title: "Evaluation & offer",
                        text: "Position is offered to the most deserving ones who will be evaluated for credibility prior to the offer.",
                    },
                ].map(({ title, text }) => (
                    <div className={styles.stepsItem} key={title}>
                        <h5 className={styles.stepsItemTitle}>{title}</h5>
                        <div
                            className={styles.stepsItemText}
                            dangerouslySetInnerHTML={{
                                __html: text,
                            }}
                        ></div>
                    </div>
                ))}
            </div>

            <Button>Find the best tech talents</Button>
        </section>
    );
};

export default SectionRecruitmentProcess;
