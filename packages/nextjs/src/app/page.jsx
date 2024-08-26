import Image from "next/image";

import earthSVG from "@/app/assets/icons/earth.svg";
import countriesSVG from "@/app/assets/icons/countries.svg";

import HeroMain from "@/app/core/components/Sections/Heros/HeroMain";
import SectionWeCanHelp from "@/app/core/components/Sections/SectionWeCanHelp";
import SectionCustomVision from "@/app/core/components/Sections/SectionCustomVision";
import SectionRecruitmentProcess from "@/app/core/components/Sections/SectionRecruitmentProcess";
import SectionCompaniesLogo from "@/app/core/components/Sections/SectionCompaniesLogo";
import SectionFeedbackList from "@/app/core/components/Sections/SectionFeedbackList";
import SectionMeetGallery from "@/app/core/components/Sections/SectionMeetGallery";
import Button from "@/app/core/components/Button";
import ContactForm from "@/app/core/components/ContactForm";
import CardSocialMedia from "@/app/core/components/Cards/CardSocialMedia";
import Advantages from "@/app/core/components/Advantages";
import Worldwide from "@/app/core/components/Worldwide";

import styles from "./styles.module.scss";
import qs from "qs";

// TODO: move into constants.ts within current folder
export const homePageQuery = qs.stringify({
    populate: {
        WhyPersonalInvest: {
            fields: ["title"],
        },
        WhyPersonalInvestItems: {
            populate: {
                fields: ["title", "subTitle"],
            },
        },
    },
});

async function getStrapiHomePage() {
    try {
        const url = new URL("/api/test-page", process.env.STRAPI_API);

        url.search = homePageQuery;

        const res = await fetch(url.href);
        const json = await res.json();

        console.info("Getting strapi data for Home page", { json: json });

        return json.data;
    } catch (error) {
        console.log(error);
    }
}

export default async function Home() {
    const data = await getStrapiHomePage();

    const { WhyPersonalInvest, WhyPersonalInvestItems } = data.attributes;

    return (
        <main className={styles.pageMain}>
            {/* @Component HeroMain */}
            <HeroMain>
                <Advantages />
                <Worldwide />
            </HeroMain>

            {/* @Component SectionWeCanHelp */}
            <div className={styles.sectionHelpWrapper}>
                <div className="container">
                    <SectionWeCanHelp />
                </div>
            </div>

            {/* @Component SectionCustomVision */}
            <div className={styles.sectionCustomVisionWrapper}>
                <div className="container">
                    <SectionCustomVision />
                </div>
            </div>

            {/* @Component SectionRecruitmentProcess */}
            <div className={styles.sectionRecruitmentProcessWrapper}>
                <div className="container">
                    <SectionRecruitmentProcess />
                </div>
            </div>

            <div className={styles.sectionPlanetWrapper}>
                <div className="container">
                    <section className={styles.sectionPlanet}>
                        <h2>
                            Trusted by companies smail and
                            <br />
                            large around the globe
                        </h2>

                        <div className={styles.planet}>
                            <div>
                                <Image
                                    src={earthSVG}
                                    alt="Image"
                                    width={882}
                                    height={882}
                                />
                            </div>
                            <div>
                                <Image
                                    src={countriesSVG}
                                    alt="Image"
                                    width={740}
                                    height={542}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className={styles.sectionWhyWrapper}>
                <div className="container">
                    <section className={styles.sectionWhy}>
                        <h2>{WhyPersonalInvest.title}</h2>

                        <div className={styles.reasons}>
                            {WhyPersonalInvestItems.map(
                                ({ title, description }) => (
                                    <div
                                        className={styles.reasonsItem}
                                        key={title}
                                    >
                                        <h5 className={styles.reasonsItemTitle}>
                                            {title}
                                        </h5>
                                        <p className={styles.reasonsItemText}>
                                            {description}
                                        </p>
                                    </div>
                                ),
                            )}
                            <div className={styles.reasonsItem}>
                                <div className={styles.reasonsItemTitle}></div>
                                <div className={styles.reasonsItemText}>
                                    <Button theme="primary">
                                        Find the best tech talents
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* @Component SectionCompaniesLogo */}
            <SectionCompaniesLogo />

            {/* @Component SectionFeedbackList */}
            <div className={styles.sectionFeedbackWrapper}>
                <SectionFeedbackList firstSlideTheme="white" />
            </div>

            {/* @Component SectionMeetGallery */}
            <div className={styles.sectionMeetWrapper}>
                <div className="container">
                    <SectionMeetGallery />
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

            <div className={styles.sectionSocialMediaWrapper}>
                <div className="container">
                    <section className={styles.sectionSocialMedia}>
                        <header>
                            <h3>
                                Follow us on <span>social media</span>
                            </h3>
                        </header>

                        <div className={styles.sectionSocialMediaList}>
                            <CardSocialMedia socialName="instagram" />
                            <CardSocialMedia socialName="linkedin" />
                            <CardSocialMedia socialName="facebook" />
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
