import { Fragment } from 'react';
import clsx from 'clsx';
import Markdown from '@/app/components/Markdown';
import styles from './styles.module.scss';

export default function SectionHowWeWork(props) {
  // type 'vertical' | 'horizontal'
  const {
    type = 'vertical',
    title,
    items = [],
    fitContent = false,
    className,
  } = props;

  const gridStyles = clsx(
    [styles.treeGrid, styles[type]],
    fitContent && styles.fitContent,
  );

  return (
    <section className={clsx(styles.sectionHowWeWork, className)}>
      <header>
        <h3>{title}</h3>
      </header>

      <div className={gridStyles}>
        {items.map((item, idx) => (
          <Fragment key={idx}>
            <div className={styles.treeGridItem}>
              <h5 className={styles.title}>{item.title}</h5>
              <hr />
              <Markdown className={styles.text}>{item.description}</Markdown>
            </div>

            <div className={styles.treeGridWrapper}>
              <div className={styles.treeGridCount}>
                <span>{idx + 1}</span>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
