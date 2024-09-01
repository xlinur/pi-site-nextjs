import Image from "next/image";
import Button from "@/app/core/components/Button";
import visionSVG from "@/app/assets/icons/vision.svg";
import styles from "./styles.module.scss";

const SectionCustomVision = () => {
    return (
        <section className={styles.sectionCustomVision}>
            <div className={styles.imageWrapper}>
                <Image src={visionSVG} alt="Image" full />
            </div>

            <div className={styles.sectionCustomVisionContent}>
                <h2>Custom vision of your needs</h2>

                <p>
                    PersonalInvest is a global Informational Technology partner
                    for GameDev, Blockchain, Fintech and many other companies
                    that are looking to gain or retain a competitive advantage
                    by improving recruitment processes.
                    <br />
                    <br />
                    Our IT recruitment and consulting agency also has strong
                    experience in{" "}
                    <span>
                        searching for development teams, opening development
                        centers, business consulting, market research and
                        analytics.
                    </span>
                </p>

                <Button icon>More industries</Button>
            </div>
        </section>
    );
};

export default SectionCustomVision;
