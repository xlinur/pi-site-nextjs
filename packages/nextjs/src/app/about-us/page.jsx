import Image from "next/image";

import HeroMain from "@/app/core/components/Sections/Heros/HeroMain";
import SectionPointsAboutUs from "@/app/core/components/Sections/SectionPointsAboutUs";
import SectionUsInNumbers from "@/app/core/components/Sections/SectionUsInNumbers";
import SectionFeedbackList from "@/app/core/components/Sections/SectionFeedbackList";
import SectionWeCanHelp from "@/app/core/components/Sections/SectionWeCanHelp";
import ContactForm from "@/app/core/components/ContactForm";
import CardSocialMedia from "@/app/core/components/Cards/CardSocialMedia";
import SectionHowWeWork from "../core/components/Sections/SectionHowWeWork";

import founderFace from "@/app/assets/images/founder.jpg";
import countrymapPng from "@/app/assets/images/countrymap.png";
import { aboutUsBD } from "./db/about-as.db";
import styles from "./styles.module.scss";
import Button from "@/app/core/components/Button";

export default async function PageAboutUs() {
    return (
        <main>
            <HeroMain animateBg />

            <div className="container">
                <div className={styles.firstBlock}>
                    <SectionUsInNumbers />
                    <SectionPointsAboutUs />
                </div>
            </div>

            <div className="container">
                <SectionHowWeWork />
            </div>

            <div className="container">
                <section className={styles.sectionFounder}>
                    <h3>Our founder</h3>

                    <div className={styles.cardFounder}>
                        <div className={styles.cardFounderInfo}>
                            <div className={styles.wrap}>
                                <div className={styles.cardFounderInfoImage}>
                                    <Image
                                        src={founderFace}
                                        alt="Founder avatar"
                                        width={171}
                                        height={171}
                                    />
                                </div>
                                <h5 className={styles.cardFounderInfoName}>
                                    Elena Lenko,
                                </h5>
                                <p className={styles.cardFounderInfoPosition}>
                                    Founder and CEO
                                </p>
                            </div>
                            <div className={styles.cardFounderInfoSocial}>
                                <a href="#">In</a>
                                <a href="#">F</a>
                                <a href="#">Em</a>
                            </div>
                        </div>
                        <div className={styles.cardFounderContent}>
                            <div
                                className={`h5 ${styles.cardFounderContentText}`}
                            >
                                PersonalInvest is a big family in which such
                                values as, respect, professional growth and
                                dedication to our work and clients have been
                                cherished for more than 15 years already. We
                                work exactly the same way we live - with
                                passion, devotion and willing to make this world
                                a better place.
                            </div>
                            <p className={styles.cardFounderContentExperience}>
                                <span>15+ years</span> of experience in tech
                                recruitment. Started PersonalInvest company{" "}
                                <span>in 2008</span> without any investments and
                                experience in IT.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container">
                <section className={styles.sectionTeam}>
                    <header>
                        <h3>Our team</h3>
                        <p>
                            Now the team consists of 40 people (65 including
                            external consultants) with{" "}
                            <span>700+ clients worldwide</span> whose drive is
                            to be the part of your success!.
                        </p>
                    </header>

                    <div className={styles.teamGalleryGrid}>
                        {aboutUsBD.team.map((item, idx) => {
                            return (
                                <div
                                    className={styles.teamGalleryItem}
                                    key={`${item.name}_${idx}`}
                                >
                                    <div className={styles.teamGalleryImage}>
                                        <Image
                                            src={item.photo}
                                            alt="Team member photo"
                                            width={390}
                                            height={390}
                                        />
                                    </div>

                                    <div className={styles.teamGalleryInfo}>
                                        <h5 className={styles.name}>
                                            {item.name}
                                        </h5>
                                        <p className={styles.position}>
                                            {item.position}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>

            <div className="container">
                <section className={styles.sectionMapImg}>
                    <header>
                        <h3>
                            Trusted by companies smail and large around the
                            globe
                        </h3>
                        <Button>Connect with us</Button>
                    </header>

                    <Image
                        src={countrymapPng}
                        alt="countries"
                        width={693}
                        height={422}
                    />
                </section>
            </div>

            <SectionFeedbackList firstSlideTheme="dark" />

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
