import React from 'react';
import styles from './styles.module.scss';
import SkeletonButton from '../Button';
import clsx from 'clsx';

const SkeletonCard = ({ className, addExtraContent, addButton }) => {
  return (
    <div className={clsx(styles.skeletonCard, className)}>
      <div className={styles.skeletonInfo}>
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonText} />
        <div className={clsx(styles.skeletonText, styles.short)} />
        {addExtraContent && (
          <>
            <div className={styles.skeletonText} />
            <div className={clsx(styles.skeletonText, styles.short)} />
          </>
        )}
      </div>

      {addButton && <SkeletonButton />}
    </div>
  );
};

export default SkeletonCard;