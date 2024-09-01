import HeroMain from "@/app/core/components/Sections/Heros/HeroMain";
import ContactForm from "@/app/core/components/ContactForm";

import SectionWeCanHelp from "@/app/core/components/Sections/SectionWeCanHelp";
import SectionCustomVision from "@/app/core/components/Sections/SectionCustomVision";
import SectionHowWeWork from "@/app/core/components/Sections/SectionHowWeWork";
import SectionKeySectors from "@/app/core/components/Sections/SectionKeySectors";

// import Button from "@/app/core/components/Button";
// import chatSVG from "@/app/assets/icons/chat-white.svg";

import styles from "./styles.module.scss";

export default async function PageIndustries() {
    const mok = {
        HeroSection: {
            title: "# Industries *we work with*",
            subtitle:
                "We are *a global Informational Technology* partner with narrow industry specializations. PersonalInvest delivers results because our expertise lies in areas and industries that we know thoroughly.",
            actions: [],
        },
        IndustrySectorsSections: {
            title: "### *Industries* we work with",
            items: [
                {
                    title: "GameDev",
                    link: "",
                },
                {
                    title: "BlockChain",
                    link: "",
                },
                {
                    title: "Saas",
                    link: "",
                },
                {
                    title: "Fintech",
                    link: "",
                },
                {
                    title: "Cryptocurrency",
                    link: "",
                },
                {
                    title: "AI",
                    link: "",
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
                <SectionKeySectors />
            </div>

            <div className="container">
                <SectionHowWeWork />
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
