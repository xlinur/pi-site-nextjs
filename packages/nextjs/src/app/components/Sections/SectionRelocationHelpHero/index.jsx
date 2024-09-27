import Button from '@/app/components/Button';
import styles from './styles.module.scss';
import Markdown from 'react-markdown';

const SectionRelocationHelpHero = ({
  title,
  description,
  items,
  contactUsBtn,
  bottomText,
  isNotHero,
}) => {
  return (
    <section className={styles.sectionPersonnelRecruitment}>
      <header>
        {isNotHero ? (
          <h4>
            <Markdown>{title}</Markdown>
          </h4>
        ) : (
          <h1>
            <Markdown>{title}</Markdown>
          </h1>
        )}

        <p>{description}</p>
      </header>

      <div className={styles.content}>
        <div className={styles.contentList}>
          {items.map((item, idx) => (
            <div className={styles.item} key={idx}>
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0321 19.0311C18.5844 19.0311 19.0321 18.5834 19.0321 18.0311L19.0321 9.0311C19.0321 8.47882 18.5844 8.0311 18.0321 8.0311C17.4798 8.0311 17.0321 8.47882 17.0321 9.0311L17.0321 17.0311L9.03208 17.0311C8.4798 17.0311 8.03208 17.4788 8.03208 18.0311C8.03208 18.5834 8.4798 19.0311 9.03208 19.0311L18.0321 19.0311ZM9.5468 10.96L17.325 18.7382L18.7392 17.324L10.961 9.54582L9.5468 10.96Z"
                  fill="currentColor"
                />
              </svg>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {bottomText && contactUsBtn && (
          <div className={styles.contentFooter}>
            <p>{bottomText}</p>
            <Button withIcon name={contactUsBtn?.name} />
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionRelocationHelpHero;
