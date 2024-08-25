import styles from "./styles.module.scss";

import React from "react";

const Advantages = () => {
    return (
        <div className={`h5 ${styles.sectionHeroAdvantages}`}>
            <div className={styles.sectionHeroAdvantagesItem}>
                <span className="h4">430 000+</span>
                <span>IT candidates</span>
            </div>

            <div className={styles.sectionHeroAdvantagesDivider}></div>

            <div className={styles.sectionHeroAdvantagesItem}>
                <span>
                    We work without <br /> prepayment
                </span>
            </div>

            <div className={styles.sectionHeroAdvantagesDivider}></div>

            <div className={styles.sectionHeroAdvantagesItem}>
                <span>Our fee </span>
                <span className="h4">7% - 15% </span>
                <span>
                    of candidate’s <br /> yearly income
                </span>
            </div>

            <div className={styles.sectionHeroAdvantagesDivider}></div>

            <div className={styles.sectionHeroAdvantagesItem}>
                <span className="h4">3-5</span>
                <span>weeks is an average closing</span>
            </div>
        </div>
    );
};

export default Advantages;
