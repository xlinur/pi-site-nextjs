import Button from "@/app/core/components/Button";
import SliderFeedback from "@/app/core/components/Sliders/SliderFeedback";

import styles from "./styles.module.scss";

const SectionFeedbackList = ({ firstSlideTheme }) => {
    return (
        <section className={styles.sectionFeedback}>
            <div className="container">
                <header>
                    <h3>What our clients say</h3>

                    <Button theme="secondary">Read more reviews</Button>
                </header>
            </div>

            <div className={styles.slider}>
                <SliderFeedback firstSlideTheme={firstSlideTheme} />
            </div>
        </section>
    );
};

export default SectionFeedbackList;
