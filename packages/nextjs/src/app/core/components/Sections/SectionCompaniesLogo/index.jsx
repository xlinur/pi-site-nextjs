import Button from "@/app/core/components/Button";
import SliderInfinityLogos from "@/app/core/components/Sliders/SliderInfinityLogos";

import styles from "./styles.module.scss";

const CompaniesLogo = () => {
    return (
        <section className={styles.sectionCompanies}>
            <h3>9 of 10 companies come to us and stay</h3>

            <div className={styles.infinitySliderWrapper}>
                <SliderInfinityLogos />
            </div>

            <Button theme="primary">Add your logo</Button>
        </section>
    );
};

export default CompaniesLogo;
