'use client';

import styles from './styles.module.scss';

const FilterBool = ({ title, checked = false, onChange }) => {
  const toggle = (e) => {
    onChange?.(e.target.checked);
  };

  return (
    <div className={styles.wrapper}>
      <p>{title}</p>

      <label className={styles.slider}>
        <input type="checkbox" onChange={toggle} checked={checked} />

        <div className={styles.sort}></div>
      </label>
    </div>
  );
};

export default FilterBool;
