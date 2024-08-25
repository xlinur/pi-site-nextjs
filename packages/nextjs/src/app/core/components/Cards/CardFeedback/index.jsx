import styles from "./styles.module.scss";

function CardFeedback(props) {
    const {
        essence = "“Thanks to Elena Lenko and the PersonalInvest team, we began to believe that anything is possible”",
        text = `We always place very high demands on candidates. But thanks
              to Elena Lenko and the PersonalInvest team, we began to
              believe that anything is possible. Thanks to cooperation, we
              were not only able to find first-class specialists at a good
              price, but also improved the quality of the hiring process…`,
        userInfo = {
            title: "CTO NoTime",
            name: "Dmitry Zhersh",
            position: "Head of Global Recruitment",
        },
        link = "#",
        firstSlideTheme,
    } = props;

    return (
        <article
            className={`${styles.card} ${styles[`bg-${firstSlideTheme}`]}`}
        >
            <div className={styles.cardContent}>
                <p>
                    <b>{essence}</b>
                </p>
                <p>{text}</p>
            </div>

            <div className={styles.cardUser}>
                <h5 className={styles.cardUserTitle}>{userInfo.title}</h5>
                <div className={styles.cardUserAbout}>
                    <div className={styles.cardUserName}>{userInfo.name}</div>
                    <div className={styles.cardUserPosition}>
                        {userInfo.position}
                    </div>
                </div>
            </div>

            <a href={link} className={styles.linkReadMore}>
                Read all
            </a>
        </article>
    );
}

export default CardFeedback;
