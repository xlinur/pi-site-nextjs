import Markdown from "react-markdown";

import styles from "./styles.module.scss";

const mok = {
    title: "### *Industries* we work with",
    items: [
        {
            title: "GameDev",
            url: "",
        },
        {
            title: "BlockChain",
            url: "",
        },
        {
            title: "Saas",
            url: "",
        },
        {
            title: "Fintech",
            url: "",
        },
        {
            title: "Cryptocurrency",
            url: "",
        },
        {
            title: "AI",
            url: "",
        },
    ],
};

export default function SectionKeySectors({ data = mok }) {
    return (
        <section className={styles.sectionKeySectors}>
            <header>
                <Markdown>{data.title}</Markdown>
            </header>

            {data.items.map((item, idx) => (
                <a href={item.url} className={styles.cartSectorItem} key={idx}>
                    <h5>{item.title}</h5>
                </a>
            ))}
        </section>
    );
}
