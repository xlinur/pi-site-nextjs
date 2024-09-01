import Button from "@/app/core/components/Button";
import ContactForm from "@/app/core/components/ContactForm";
import CardFeedback from "@/app/core/components/Cards/CardFeedback";

import styles from "./styles.module.scss";

export default async function PageFeedback() {
    return (
        <main className={styles.pageFeedback}>
            <div className="container">
                <header>
                    <h1 className="h2">Reviews from satisfied clients</h1>

                    <div className={styles.feedbackSectionLinks}>
                        <Button theme="secondary">IT Recruitment</Button>
                        <Button theme="secondary">Executive Search</Button>
                        <Button theme="secondary">GameDev</Button>
                        <Button theme="secondary">Cases</Button>
                        <Button theme="secondary">Business Consulting</Button>
                        <Button theme="secondary">AI</Button>
                    </div>
                </header>

                <section className={styles.feedbackExpandableList}>
                    <div className={styles.feedbackExpandableListGrid}>
                        {Array.from(Array(10)).map((_, idx) => (
                            <CardFeedback key={idx} />
                        ))}
                    </div>

                    <Button>More reviews</Button>
                </section>

                <section className={styles.sectionForm}>
                    <ContactForm />
                </section>
            </div>
        </main>
    );
}
