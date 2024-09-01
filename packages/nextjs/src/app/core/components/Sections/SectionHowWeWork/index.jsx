import clsx from "clsx";
import styles from "./styles.module.scss";

const mok = {
    title: "How we work",
    items: [
        {
            title: "Your application",
            text: "Filling out the standard form and discussing details (3-5 days)",
        },
        {
            title: "Your application",
            text: "Filling out the standard form and discussing details (3-5 days)",
        },
        {
            title: "Your application",
            text: "Filling out the standard form and discussing details (3-5 days)",
        },
        {
            title: "Your application",
            text: "Filling out the standard form and discussing details (3-5 days)",
        },
        {
            title: "Your application",
            text: "Filling out the standard form and discussing details (3-5 days)",
        },
    ],
};

export default function SectionHowWeWork(props) {
    // type 'vertical' | 'horizontal'
    const { type = "vertical", data = mok, fitContent = false } = props;

    const gridStyles = clsx(
        [styles.treeGrid, styles[type]],
        fitContent && styles.fitContent,
    );
    return (
        <section className={styles.sectionHowWeWork}>
            <header>
                <h3>{data.title}</h3>
            </header>

            <div className={gridStyles}>
                {data.items.map((item, idx) => (
                    <>
                        <div className={styles.treeGridItem} key={idx}>
                            <h5 className={styles.title}>{item.title}</h5>
                            <hr />
                            <p className={styles.text}>{item.text}</p>
                        </div>
                        <div className={styles.treeGridWrapper}>
                            <div className={styles.treeGridCount} key={idx}>
                                <span>{idx + 1}</span>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </section>
    );
}
