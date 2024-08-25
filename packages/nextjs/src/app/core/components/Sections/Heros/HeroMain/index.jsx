import Image from "next/image";
import Button from "@/app/core/components/Button";
import heroLinesPNG from "@/app/assets/images/hero-lines.png";
import styles from "./styles.module.scss";
import qs from "qs";

// TODO: move into constants.ts within current folder
export const homePageQuery = qs.stringify({
    populate: {
        HeroSection: {
            fields: ["title", "subTitle"],
        },
    },
});

async function getStrapiHomePage() {
    try {
        const url = new URL("/api/home-page", process.env.STRAPI_API);

        url.search = homePageQuery;

        const res = await fetch(url.href);
        const json = await res.json();

        console.info("Getting strapi data for Home page", { json: json });

        return json.data;
    } catch (error) {
        console.log(error);
    }
}

const HeroMain = async () => {
    const data = await getStrapiHomePage();

    const { HeroSection } = data.attributes;

    return (
        <div className={styles.sectionWrapper}>
            <div className="container">
                <section className={styles.sectionHero}>
                    <header>
                        <h1
                            dangerouslySetInnerHTML={{
                                __html: HeroSection.title,
                            }}
                        />
                        <p
                            dangerouslySetInnerHTML={{
                                __html: HeroSection.subTitle,
                            }}
                        />
                    </header>

                    <div className={styles.sectionHeroActions}>
                        <Button theme="primary" size="lg" icon>
                            Hire now
                        </Button>

                        <Button theme="secondary" size="lg">
                            I’m a candidate
                        </Button>
                    </div>

                    <div className={`h5 ${styles.sectionHeroAdvantages}`}>
                        <div className={styles.sectionHeroAdvantagesItem}>
                            <span className="h4">430 000+</span>
                            <span>IT candidates</span>
                        </div>

                        <div
                            className={styles.sectionHeroAdvantagesDivider}
                        ></div>

                        <div className={styles.sectionHeroAdvantagesItem}>
                            <span>
                                We work without <br /> prepayment
                            </span>
                        </div>

                        <div
                            className={styles.sectionHeroAdvantagesDivider}
                        ></div>

                        <div className={styles.sectionHeroAdvantagesItem}>
                            <span>Our fee </span>
                            <span className="h4">7% - 15% </span>
                            <span>
                                of candidate’s <br /> yearly income
                            </span>
                        </div>

                        <div
                            className={styles.sectionHeroAdvantagesDivider}
                        ></div>

                        <div className={styles.sectionHeroAdvantagesItem}>
                            <span className="h4">3-5</span>
                            <span>weeks is an average closing</span>
                        </div>
                    </div>

                    <div className={styles.worldwide}>
                        {Array.from(Array(6)).map((_, index) => (
                            <h4 key={index}>Worldwide</h4>
                        ))}
                    </div>
                </section>
            </div>

            <div className={styles.sectionHeroDecorImage}>
                <Image
                    src={heroLinesPNG}
                    alt="decor lines hero block"
                    fill
                ></Image>
            </div>
        </div>
    );
};

export default HeroMain;
