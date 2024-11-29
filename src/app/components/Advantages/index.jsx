import Markdown from '@/app/components/Markdown';
import styles from './styles.module.scss';

import React, { Fragment } from 'react';
import clsx from 'clsx';

export default function Advantages({ advantages = [] }) {
  return (
    <div className={clsx(styles.sectionHeroAdvantages, 'h5')}>
      {advantages.map((item) => (
        <Fragment key={item.id}>
          <div className={styles.sectionHeroAdvantagesItem}>
            <Markdown>{item.content}</Markdown>
          </div>
          <div className={styles.sectionHeroAdvantagesDivider} />
        </Fragment>
      ))}
    </div>
  );
}
