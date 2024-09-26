import clsx from 'clsx';
import styles from './styles.module.scss';
import Markdown from 'react-markdown';

export default function SectionHowWeWork(props) {
  // type 'vertical' | 'horizontal'
  const { type = 'vertical', title, items = [], fitContent = false } = props;

  const gridStyles = clsx(
    [styles.treeGrid, styles[type]],
    fitContent && styles.fitContent,
  );

  return (
    <section className={styles.sectionHowWeWork}>
      <header>
        <h3>{title}</h3>
      </header>

      <div className={gridStyles}>
        {items.map((item, idx) => (
          <>
            <div className={styles.treeGridItem} key={idx}>
              <h5 className={styles.title}>{item.title}</h5>
              <hr />
              <Markdown className={styles.text}>{item.description}</Markdown>
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
