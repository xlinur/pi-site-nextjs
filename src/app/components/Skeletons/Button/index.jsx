import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

const SkeletonButton = ({ className }) => {
  return <button className={clsx(className, styles.skeletonButton)} />;
};

export default SkeletonButton;
