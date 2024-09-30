import Markdown from 'react-markdown';
import Button from '../../Button';
import styles from './styles.module.scss';

function CardFeedback(props) {
  const {
    essence,
    content,
    link,
    company,
    authorName,
    authorPosition,
    firstSlideTheme,
    readAllBtn,
    invisible,
  } = props;

  // TODO: just hide with css
  if (invisible) return null;

  return (
    <article className={`${styles.card} ${styles[`bg-${firstSlideTheme}`]}`}>
      <div className={styles.cardContent}>
        <b className={styles.cardContentEssence}>{essence}</b>

        <Markdown className={styles.text}>{content}</Markdown>
      </div>

      <div className={styles.btnInlineUser}>
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
          name={readAllBtn}
        />
      </div>
    </article>
  );
}

export default CardFeedback;
