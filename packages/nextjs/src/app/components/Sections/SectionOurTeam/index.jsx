import Markdown from 'react-markdown';
import styles from './styles.module.scss';

export default function SectionOurTeam(props) {
  const { title, description, members } = props;

  return (
    <section className={styles.sectionTeam}>
      <header>
        <h3>{title}</h3>
        <Markdown>{description}</Markdown>
      </header>

      <div className={styles.teamGalleryGrid}>
        {members.map((item, idx) => {
          return (
            <div className={styles.teamGalleryItem} key={`${item.name}_${idx}`}>
              <div className={styles.teamGalleryImage}>
                <img
                  src={item.photo.data.attributes.url}
                  alt={item.photo.data.attributes.alternativeText}
                  width={390}
                  height={390}
                  loading="lazy"
                />
              </div>

              <div className={styles.teamGalleryInfo}>
                <h5 className={styles.name}>{item.name}</h5>
                <p className={styles.position}>{item.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
