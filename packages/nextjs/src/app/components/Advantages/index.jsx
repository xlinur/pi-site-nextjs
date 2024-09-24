import Markdown from 'react-markdown';
import styles from './styles.module.scss';

import React from 'react';
import clsx from 'clsx';

export default function Advantages({ advantages }) {
  return (
    <div className={clsx(styles.sectionHeroAdvantages, 'h5')}>
      {advantages.map((item, idx) => (
        <div key={idx} className={styles.itemWrapper}>
          <div className={styles.sectionHeroAdvantagesItem}>
            <Markdown>{item}</Markdown>
          </div>

          <div className={styles.sectionHeroAdvantagesDivider}></div>
        </div>
      ))}
    </div>
  );
}
