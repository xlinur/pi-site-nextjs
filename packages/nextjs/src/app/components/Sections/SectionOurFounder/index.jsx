import Markdown from 'react-markdown';
import styles from './styles.module.scss';

export default function SectionOurFounder(props) {
  const { title, photo, name, position, li, fb, email, text, description } =
    props;

  return (
    <section className={styles.sectionFounder}>
      <h3>{title}</h3>

      <div className={styles.cardFounder}>
        <div className={styles.cardFounderInfo}>
          <div className={styles.wrap}>
            <div className={styles.cardFounderInfoImage}>
              <img
                src={photo.data.attributes.url}
                alt={photo.data.attributes.alternativeText}
                width={171}
                height={171}
              />
            </div>
            <h5 className={styles.cardFounderInfoName}>{name}</h5>
            <p className={styles.cardFounderInfoPosition}>{position}</p>
          </div>
          <div className={styles.cardFounderInfoSocial}>
            <a href={li}>In</a>
            <a href={fb}>F</a>
            <a href={`mailto:${email}`}>Em</a>
          </div>
        </div>
        <div className={styles.cardFounderContent}>
          <div className={`h5 ${styles.cardFounderContentText}`}>{text}</div>
          <p className={styles.cardFounderContentExperience}>
            <Markdown>{description}</Markdown>
          </p>
        </div>
      </div>
    </section>
  );
}
