import Markdown from '@/app/components/Markdown';
import styles from './styles.module.scss';

import React from 'react';
import clsx from 'clsx';

export default function Advantages({ advantages = [] }) {
  return (
    <div className={clsx(styles.sectionHeroAdvantages, 'h5')}>
      {advantages.map((item) => (
        <>
          <div key={item.id} className={styles.itemWrapper}>
            <div className={styles.sectionHeroAdvantagesItem}>
              <h5>
                <Markdown>{item.content}</Markdown>
              </h5>
            </div>
          </div>
          <div className={styles.sectionHeroAdvantagesDivider}></div>
        </>
      ))}
    </div>
  );
}
