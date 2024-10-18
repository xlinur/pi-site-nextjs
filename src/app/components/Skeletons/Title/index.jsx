import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

const SkeletonTitle = ({ className }) => {
  return <div className={clsx(styles.skeletonTitle, className)} />;
};

export default SkeletonTitle;
