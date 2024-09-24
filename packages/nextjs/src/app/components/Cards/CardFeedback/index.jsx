import Markdown from 'react-markdown';
import Button from '../../Button';
import styles from './styles.module.scss';

function CardFeedback(props) {
  const {
    essence = '“Thanks to Elena Lenko and the PersonalInvest team, we began to believe that anything is possible”',
    content = `We always place very high demands on candidates. But thanks
              to Elena Lenko and the PersonalInvest team, we began to
              believe that anything is possible. Thanks to cooperation, we
              were not only able to find first-class specialists at a good
              price, but also improved the quality of the hiring process…`,
    link = '#',
    company = 'CTO NoTime',
    authorName = 'Dmitry Zhersh',
    authorPosition = 'Head of Global Recruitment',
    firstSlideTheme,
    readAllBtn,
  } = props;

  return (
    <article className={`${styles.card} ${styles[`bg-${firstSlideTheme}`]}`}>
      <div className={styles.cardContent}>
        <p>
          <b>{essence}</b>
        </p>

        <Markdown>{content}</Markdown>
      </div>

      <div className={styles.cardUser}>
        <h5 className={styles.cardUserTitle}>{company}</h5>
        <div className={styles.cardUserAbout}>
          <div className={styles.cardUserName}>{authorName}</div>
          <div className={styles.cardUserPosition}>{authorPosition}</div>
        </div>
      </div>

      <Button
        theme="text"
        withIcon
        iconRight
        href={link}
        className={styles.linkReadMore}
      >
        {readAllBtn}
      </Button>
    </article>
  );
}

export default CardFeedback;
